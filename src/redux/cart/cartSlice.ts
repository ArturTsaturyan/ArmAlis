import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import CartService from '../../http/cartService/cartService';
// import { useTranslation } from 'react-i18next';

interface IInitialState {
  items: any;
  cartOn: any;
  isProcessingRequest: boolean;
}

const initialState: IInitialState = {
  items: [],
  cartOn: [],
  isProcessingRequest: false,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    start: (state, isProcessingRequest) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        items: action.payload,
        isProcessingRequest: false,
      };
    },
    onCart: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        cartOn: action.payload,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const addtoCart = (product: object) => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const { data } = await CartService.addCart(product);
    dispatch(success(data.data));
    toast.success('Ապրանքը հաջողությամբ ավելացվել է զամբյուղում։', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error('Դուք չեք կարող ավելացնել այն զամբյուղ։', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
    dispatch(start(false));
  }
};

export const addtoCart2 = (product: object) => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const { data } = await CartService.addCart(product);

    dispatch(success(data.data));
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(start(false));
  }
};
export const addtoOnCart = (id: any) => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const data = await CartService.productsOnCart(id);
    dispatch(success(data.data.data));
  } catch (error: any) {
    // dispatch(error(error));
  } finally {
    dispatch(start(false));
  }
};

export const removeFromCart = (cart_id: any, id: any) => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const data = await CartService.deletedProduct({ data: { cart_id, id } });
    dispatch(success(data.data.data));
    toast.success('Հաջողությամբ ջնջվել է։', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    dispatch(error(error));
    toast.error('Դուք չեք կարող ավելացնել այն զամբյուղ։', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
    dispatch(start(false));
  }
};
export const { start, success, onCart, error } = cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export const cartSliceReducer = cartSlice.reducer;

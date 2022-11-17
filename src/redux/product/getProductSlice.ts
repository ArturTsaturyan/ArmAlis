import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductService from '../../http/productService/productService';
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

interface IInitialState {
  products: any;
  innerPage: object;
  isProcessingRequest: boolean;
  recentProducts: any;
}

const initialState: IInitialState = {
  products: [],
  innerPage: {},
  isProcessingRequest: false,
  recentProducts: [],
};

export const getProductSlice = createSlice({
  name: 'getProductSlice',
  initialState,
  reducers: {
    start: (state, isProcessingRequest) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      // console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        isProcessingRequest: false,
      };
    },
    successRecentProducts: (state, action: PayloadAction<any>) => {
      // console.log(action.payload);
      return {
        ...state,
        recentProducts: action.payload,
        isProcessingRequest: false,
      };
    },
    nextPage: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        products: [...state.products, ...action.payload],
        isProcessingRequest: false,
      };
    },
    innerPage: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        product: action.payload,
        isProcessingRequest: false,
      };
    },
    error: (state) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const loadProducts = () => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const data = await ProductService.getProducts();
    dispatch(success(data.data.data));
  } catch (error: any) {
    // dispatch(error(error));
  } finally {
    dispatch(start(false));
  }
};

export const loadRecentProducts = () => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const data = await ProductService.getRecentProducts();
    dispatch(successRecentProducts(data.data.data));
  } catch (error: any) {
    // dispatch(error(error));
  } finally {
    dispatch(start(false));
  }
};

export const innerPageOfProduct = (id: number) => async (dispatch: any) => {
  dispatch(start(true));
  try {
    const data = await ProductService.getProductInnerPage(id);
    dispatch(innerPage(data.data.data));
  } catch (error: any) {
    // dispatch(error(error));
  } finally {
    dispatch(start(false));
  }
};
export const { start, success, error, nextPage, innerPage, successRecentProducts } =
  getProductSlice.actions;
export const selectGetProducts = (state: RootState) => state.getProducts;
export const getProductSliceReducer = getProductSlice.reducer;

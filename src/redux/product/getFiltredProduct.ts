import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ProductService from '../../http/productService/productService';

interface IInitialState {
  filtredProduct: any;
}

const initialState: IInitialState = {
  filtredProduct: {},
};

export const getFiltredProductSlice = createSlice({
  name: 'getFiltredProductSlice',
  initialState,
  reducers: {
    filtreds: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        filtredProduct: action.payload,
      };
    },
  },
});

export const loadFiltredProduct = (id: number) => async (dispatch: any) => {
  try {
    const filtredProduct = await ProductService.getFiltredProduct(id);
    dispatch(filtreds(filtredProduct.data));
  } catch (err: any) {
    console.log(err);
  }
};

export const { filtreds } = getFiltredProductSlice.actions;
export const filtred = (state: RootState) => state.filtred;
export const getFiltredProductsSliceReducer = getFiltredProductSlice.reducer;

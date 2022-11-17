import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ProductService from '../../http/productService/productService';

interface IInitialState {
  newProduct: any;
}

const initialState: IInitialState = {
  newProduct: {},
};

export const newProductSlice = createSlice({
  name: 'newProductSlice',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        newProduct: action.payload,
      };
    },
  },
});

export const loadNewProduct = () => async (dispatch: any) => {
  try {
    const newProducts = await ProductService.getRecentProducts();
    dispatch(start(newProducts));
  } catch (err) {
    console.log(err);
  }
};

export const { start } = newProductSlice.actions;
export const newProducts = (state: RootState) => state.newProducts;
export const newProductSliceReducer = newProductSlice.reducer;

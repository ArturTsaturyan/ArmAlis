import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductService from '../../http/productService/productService';

interface IInitialState {
  productTypes: any;
  isProcessingRequest: boolean;
}

const initialState: IInitialState = {
  productTypes: [],
  isProcessingRequest: false,
};

export const productTypeSlice = createSlice({
  name: 'productTypeSlice',
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
        productTypes: action.payload,
        isProcessingRequest: false,
      };
    },
    nextPage: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        productTypes: [...state.productTypes, ...action.payload],
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

export const loadProductTypes =
  (currentpage = 1) =>
  async (dispatch: any) => {
    dispatch(start(true));
    try {
      const { data } = await ProductService.loadTypes(currentpage);
      if (currentpage === 1) {
        dispatch(success(data.data));
      } else {
        dispatch(nextPage(data.data));
      }
    } catch (error: any) {
      // dispatch(error(error));
    } finally {
      dispatch(start(false));
    }
  };
export const { start, success, error, nextPage } = productTypeSlice.actions;
export const selectProductType = (state: RootState) => state.productType;
export const productSliceReducer = productTypeSlice.reducer;

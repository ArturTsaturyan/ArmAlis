import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FilterService from '../../http/filterService/filterService';
import { RootState } from '../store';

interface IInitialState {
  color: any;
  size: any;
  country: any;
  thicknesses: any;
}

const initialState: IInitialState = {
  color: [],
  size: [],
  country: [],
  thicknesses: [],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    color1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        color: action.payload,
      };
    },
    size1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        size: action.payload,
      };
    },
    country1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        country: action.payload,
      };
    },
    thicknesses1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        thicknesses: action.payload,
      };
    },
  },
});

export const loadFilterColor = () => async (dispatch: any) => {
  try {
    const color = await FilterService.filterColor();
    dispatch(color1(color.data));
  } catch (err) {
    console.log(err);
  }
};

export const loadFilterSize = () => async (dispatch: any) => {
  try {
    const size = await FilterService.filterSize();
    dispatch(size1(size.data));
  } catch (err) {
    console.log(err);
  }
};

export const loadFilterCountry = () => async (dispatch: any) => {
  try {
    const country = await FilterService.filterCountry();
    dispatch(country1(country.data));
  } catch (err) {
    console.log(err);
  }
};

export const loadFilterThicknesses = () => async (dispatch: any) => {
  try {
    const thicknesses = await FilterService.filterThicknesses();
    dispatch(thicknesses1(thicknesses.data));
  } catch (err) {
    console.log(err);
  }
};

export const { color1, size1, country1, thicknesses1 } = filterSlice.actions;
export const filter = (state: RootState) => state.filter;
export const filterSliceReducer = filterSlice.reducer;

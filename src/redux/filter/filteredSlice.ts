import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FilterService from '../../http/filterService/filterService';
import { RootState } from '../store';

interface IInitialState {
  colorData?: any;
  sizeData?: any;
  countryData?: any;
  thicknessesData?: any;
  servicesData?: any;
  start?: any;
  id?: number;
  searchData?: any;
  range?: any;
}

const initialState: IInitialState = {
  id: 0,
  colorData: [],
  sizeData: [],
  countryData: [],
  thicknessesData: [],
  servicesData: [],
  start: [],
  searchData: [],
  range: [],
};

export const filteredSlice: any = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        start: action.payload,
      };
    },
    searchData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        searchData: action.payload,
      };
    },
    range: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        range: action.payload,
      };
    },
    colorData: (state, action: PayloadAction<any>) => {
      if (state.colorData.some((e: any) => e == action.payload)) {
        state.colorData = state.colorData.filter((e: any) => e !== action.payload);
      } else {
        state.colorData = [...state.colorData, action.payload];
      }
    },
    sizeData: (state, action: PayloadAction<any>) => {
      if (state.sizeData.some((e: any) => e == action.payload)) {
        state.sizeData = state.sizeData.filter((e: any) => e !== action.payload);
      } else {
        state.sizeData = [...state.sizeData, action.payload];
      }
    },
    countryData: (state, action: PayloadAction<any>) => {
      if (state.countryData.some((e: any) => e == action.payload)) {
        state.countryData = state.countryData.filter((e: any) => e !== action.payload);
      } else {
        state.countryData = [...state.countryData, action.payload];
      }
    },
    thicknessesData: (state, action: PayloadAction<any>) => {
      if (state.thicknessesData.some((e: any) => e == action.payload)) {
        state.thicknessesData = state.thicknessesData.filter((e: any) => e !== action.payload);
      } else {
        state.thicknessesData = [...state.thicknessesData, action.payload];
      }
    },
    servicesData: (state, action: PayloadAction<any>) => {
      if (state.servicesData.some((e: any) => e == action.payload)) {
        state.servicesData = state.servicesData.filter((e: any) => e !== action.payload);
      } else {
        state.servicesData = [...state.servicesData, action.payload];
      }
    },
  },
});
export const loadFiltersLink =
  (
    pageId: any,
    id: any,
    colorId: any,
    sizeId: any,
    thicknessId: any,
    manufacturerId: any,
    serviceId: any,
    changeCode: any,
    rangeData: any,
    sort: any,
    direction: any,
  ) =>
  async (dispatch: any) => {
    try {
      const dataAll = await FilterService.filtersAll(
        colorId,
        sizeId,
        thicknessId,
        manufacturerId,
        serviceId,
        id,
        pageId,
        changeCode,
        rangeData,
        sort,
        direction,
      );
      dispatch(start(dataAll.data));
    } catch (err) {
      console.log(err);
    }
  };

export const loadChangeFiltersLink =
  (
    pageId: any,
    colorId: any,
    sizeId: any,
    thicknessId: any,
    manufacturerId: any,
    serviceId: any,
    changeCode: any,
    searchInputChange: any,
    rangeData: any,
    sort?: any,
    direction?: any,
  ) =>
  async (dispatch: any) => {
    try {
      const dataAllSearch = await FilterService.filtersAllSearch(
        colorId,
        sizeId,
        thicknessId,
        manufacturerId,
        serviceId,
        pageId,
        changeCode,
        searchInputChange,
        rangeData,
        sort,
        direction,
      );
      dispatch(searchData(dataAllSearch.data));
    } catch (err) {
      console.log(err);
    }
  };

export const {
  colorData,
  sizeData,
  countryData,
  thicknessesData,
  servicesData,
  start,
  searchData,
  range,
} = filteredSlice.actions;
export const filtereds = (state: RootState) => state.filtereds;
export const filteredSliceReducer = filteredSlice.reducer;

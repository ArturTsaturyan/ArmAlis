import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Services from '../../http/services/services';
import { RootState } from '../store';

interface IInitialState {
  service: any;
}

const initialState: IInitialState = {
  service: [],
};

export const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState,
  reducers: {
    service: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        service: action.payload,
      };
    },
  },
});

export const loadServices = (id?: any) => async (dispatch: any) => {
  try {
    const services = await Services.services(id);
    dispatch(service(services.data));
  } catch (err) {
    console.log(err);
  }
};

export const { service } = serviceSlice.actions;
export const services = (state: RootState) => state.services;
export const serviceSliceReducer = serviceSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FooterService from '../../http/footerService/footerService';
import { RootState } from '../store';

interface IInitialState {
  footerLinks: any;
}

const initialState: IInitialState = {
  footerLinks: {},
};

export const footerSlice = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        footerLinks: action.payload,
      };
    },
    start1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        footerLinks1: action.payload,
      };
    },
  },
});

export const loadFooterLinks = () => async (dispatch: any) => {
  try {
    const footer = await FooterService.footerLinks();
    dispatch(start(footer.data));
  } catch (err) {
    console.log(err);
  }
};

export const loadFooterLinks1 = () => async (dispatch: any) => {
  try {
    const footer1 = await FooterService.footerLinks1();
    dispatch(start1(footer1.data));
  } catch (err) {
    console.log(err);
  }
};

// export const loadFooterLinks = () => (dispatch: any) => {
//   try {
//     dispatch(start('footer.data'));
//   } catch (err) {
//     console.log(err);
//   }
// };

export const { start, start1 } = footerSlice.actions;
export const footer = (state: RootState) => state.footer;
export const footerSliceReducer = footerSlice.reducer;

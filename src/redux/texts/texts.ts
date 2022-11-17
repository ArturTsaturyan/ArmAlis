import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TextsService from '../../http/texts/texts';
import { RootState } from '../store';

interface IInitialState {
  text: string;
}

const initialState: IInitialState = {
  text: '',
};

export const TextSlice = createSlice({
  name: 'textSlice',
  initialState,
  reducers: {
    text: (state, action: PayloadAction<any>) => {
      console.log(action.payload, 'action.payload');
      return {
        ...state,
        text: action.payload,
      };
    },
  },
});

export const loadText = () => async (dispatch: any) => {
  try {
    const text1 = await TextsService.texts();
    dispatch(text(text1?.data?.data));
  } catch (err) {
    console.log(err);
  }
};
export const { text } = TextSlice.actions;
export const texts = (state: RootState) => state.text;
export const textSliceReducer = TextSlice.reducer;

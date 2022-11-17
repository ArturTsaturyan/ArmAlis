import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitialState {
  language: string;
}

const initialState: IInitialState = {
  language: 'hy',
};

// console.log(initialState, 'initialState');

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        language: action.payload,
      };
    },
    // rus: (state, action: PayloadAction<any>) => {
    //   return {
    //     ...state,
    //     languageLinks1: action.payload,
    //   };
    // },
    // eng: (state, action: PayloadAction<any>) => {
    //   return {
    //     ...state,
    //     languageLinks2: action.payload,
    //   };
    // },
  },
});

export const loadLanguageLinks = () => (dispatch: any) => {
  try {
    dispatch(setLanguage(language));
  } catch (err) {
    console.log(err);
  }
};
// export const loadLanguageLinks1 = () => async (dispatch: any) => {
//   try {
//     const language = await LanguageService.languageLinks1();
//     dispatch(rus(language.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const loadLanguageLinks2 = () => async (dispatch: any) => {
//   try {
//     const language = await LanguageService.languageLinks2();
//     dispatch(eng(language.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
export const { setLanguage } = languageSlice.actions;
export const language = (state: RootState) => state.language;
export const languageSliceReducer = languageSlice.reducer;

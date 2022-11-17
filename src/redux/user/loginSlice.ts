import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import UserService from '../../http/authService/authService';
import { useTranslation } from 'react-i18next';

interface IInitialState {
  accessToken: any;
  isProcessingRequest: boolean;
  isOpen: boolean;
  success1: any;
}

const initialState: IInitialState = {
  accessToken: {},
  isProcessingRequest: false,
  isOpen: false,
  success1: {},
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        accessToken: action.payload,
        isProcessingRequest: false,
      };
    },
    success1: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        success1: action.payload,
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

export const authenticateUser = (userData: any) => async (dispatch: any) => {
  // const { t } = useTranslation();

  dispatch(start());
  try {
    const data = await UserService.login(userData);
    dispatch(success({ accessToken: data.data.data }));
    await AsyncStorage.setItem('token', data.data.data.token);
    const language = await localStorage.getItem('i18nextLng');

    toast.success(
      language === 'hy'
        ? data.data.data.messages['hy']
        : language === 'ru'
        ? data.data.data.messages['ru']
        : data.data.data.messages['en'],
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  } catch (err: any) {
    const language = await localStorage.getItem('i18nextLng');

    toast.error(
      language === 'hy'
        ? err.response.data.errors.messages[0]['hy']
        : language === 'ru'
        ? err.response.data.errors.messages[0]['ru']
        : err.response.data.errors.messages[0]['en'],
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  }
};

export const registerUser = (userData: any) => async (dispatch: any) => {
  dispatch(start());
  try {
    const data = await UserService.register(userData);
    dispatch(success({ accessToken: data.data.data }));

    await AsyncStorage.setItem('token', data.data.data.token);
    toast.success('Դուք հաջողությամբ գրանցել եք հաշիվ:', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error('Խնդրում ենք փորձել կրկին։', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
export const getMe = () => async (dispatch: any) => {
  dispatch(start());
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const data = await UserService.getMe();
      dispatch(success1(data.data.data));
    } else {
      // dispatch(error('Unauthenticated'));
    }
  } catch (error: any) {
    // dispatch(error(error.message));
  }
};

export const user = () => async () => {
  const userId = uuidv4();
  try {
    localStorage.setItem('id', userId);
  } catch (err: any) {
    console.log(err);
  }
};
export const logoutUser = () => async (dispatch: any) => {
  dispatch(start());
  try {
    await UserService.logout();
    await AsyncStorage.removeItem('token');
    dispatch(success({ accessToken: {} }));
  } catch (err: any) {
    console.log(err);
  }
};

export const { start, success, error, success1 } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;

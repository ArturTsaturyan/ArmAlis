import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser } from '../user/interface';

export interface IUsersList {
  isLoadingUsers: boolean;
  userList?: IUser[];
}
const initialState: IUsersList = { isLoadingUsers: false };
export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isLoadingUsers: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
        isLoadingUsers: false,
      };
    },
    error: (state) => {
      return {
        ...state,
        isLoadingUsers: false,
      };
    },
  },
});
// export const fetchUsers = (email: any, password: any) => async (dispatch: any) => {
//   dispatch(start());
//   try {
//     const { data } = await UserService.login({ email, password });
//     dispatch(success({ userList: data.data }));
//     await AsyncStorage.setItem('token', data.token);
//   } catch (error: any) {
//     dispatch(error(error.message));
//   }
// };

export const { start, success, error } = userListSlice.actions;
export const selectUserLists = (state: RootState) => state.userList;
export const usersListReducer = userListSlice.reducer;

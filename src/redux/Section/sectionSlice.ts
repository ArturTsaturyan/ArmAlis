import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  sectionId: 0,
};

const sectionSlice = createSlice({
  name: 'section',
  initialState: defaultState,
  reducers: {
    changeSectionId: (state: any, action: any) => {
      return (state.sectionId = action.payload);
    },
  },
});

export default sectionSlice.reducer;
export const { changeSectionId } = sectionSlice.actions;

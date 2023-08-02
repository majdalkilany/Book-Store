import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    categoriesStatus() {
      return 'Under construction';
    },
  },
});
export const { categoriesStatus } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    // eslint-disable-next-line no-unused-vars
    categoriesStatus(state, action) {
      return 'Under construction';
    },
  },
});
export const { categoriesStatus } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getAllBooks } from '../thunks/fetchBooks';
import { createBook } from '../thunks/addBooks';
import { deleteBook } from '../thunks/deleteBook';

const booksSlice = createSlice({
  name: 'books',
  initialState: {},
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => action.payload);
    builder.addCase(createBook.fulfilled, (state, action) => {
      const newBook = action.payload;
      const newItemId = nanoid();
      state[newItemId] = [{ ...newBook, item_id: nanoid() }];
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const newState = { ...state };
      const toRemove = action.payload;
      delete newState[toRemove];
      return newState;
    });
  },

});

export const booksReducer = booksSlice.reducer;

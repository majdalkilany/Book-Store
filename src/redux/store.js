import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/booksSlice';

import { categoriesReducer, categoriesStatus } from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export {
  store, categoriesStatus,
};
export * from './thunks/fetchBooks';
export * from './thunks/addBooks';
export * from './thunks/deleteBook';

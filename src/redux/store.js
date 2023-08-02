import { configureStore } from '@reduxjs/toolkit';
import { booksReducer, addBook, removeBook } from './books/booksSlice';

import { categoriesReducer, categoriesStatus } from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export {
  store, addBook, removeBook, categoriesStatus,
};

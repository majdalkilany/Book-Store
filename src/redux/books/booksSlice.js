import { createSlice, nanoid } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  reducers: {
    addBook(state, action) {
      const payload = { ...action.payload, item_id: nanoid() };
      state.push(payload);
    },
    removeBook(state, action) {
      const update = state.filter((book) => action.payload.item_id !== book.item_id);
      return update;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

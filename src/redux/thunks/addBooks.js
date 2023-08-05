import axios from 'axios';
import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';

const createBook = createAsyncThunk('post/book', async (newBook) => {
  const bookWithId = { ...newBook, item_id: nanoid() };
  try {
    await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books`, bookWithId);
    return bookWithId;
  } catch (error) {
    throw new Error(error);
  }
});

export { createBook };

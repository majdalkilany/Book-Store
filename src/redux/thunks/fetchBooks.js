import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllBooks = createAsyncThunk('fetch/books', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books`);
  return response.data;
});

export { getAllBooks };

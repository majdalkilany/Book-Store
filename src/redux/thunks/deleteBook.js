import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const deleteBook = createAsyncThunk('delete/book', async (ID) => {
  try {
    ID = ID.item_id;

    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_APP_ID}/books/${ID}`);
    return ID;
  } catch (error) {
    throw new Error(error);
  }
});

export { deleteBook };

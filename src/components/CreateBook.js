import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/store';

import './createBook.css';

export default function CreateBook() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      category,
    };
    try {
      dispatch(createBook(newBook));
      event.target.reset();
      setCategory('');
      setTitle('');
      setAuthor('');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="Title-h4 Text-Style-12">ADD NEW BOOK </h4>
        <input
          className="title-field "
          type="text"
          id="bookTitle"
          name="bookTitle"
          placeholder="Book title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          className="title-field "
          id="bookAuthor"
          name="bookAuthor"
          placeholder="Book author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          required
        />
        <select
          className="category-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled className="category">
            Select a category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction 2</option>
        </select>
        <button type="submit" className="Rect"> ADD BOOK</button>
      </form>
    </div>
  );
}

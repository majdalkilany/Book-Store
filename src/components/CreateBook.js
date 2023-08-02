import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/store';

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
    dispatch(addBook(newBook));
    event.target.reset();
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>ADD NEW BOOK </h4>
        <input
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
          id="bookAuthor"
          name="bookAuthor"
          placeholder="Book author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction 2</option>
        </select>
        <button type="submit"> ADD BOOK</button>
      </form>
    </div>
  );
}

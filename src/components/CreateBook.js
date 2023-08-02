import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/store';

export default function CreateBook() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.bookTitle.value,
      author: event.target.bookAuthor.value,
      category,
    };
    dispatch(addBook(newBook));
    event.target.reset();
    setCategory('');
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
          required
        />
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          placeholder="Book author"
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

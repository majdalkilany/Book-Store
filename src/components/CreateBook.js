import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CreateBook({ handleCreateBook }) {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      selectedCategory,
    };
    handleCreateBook(newBook);
    setTitle('');
    setSelectedCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>ADD NEW BOOK </h4>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="category  1">category 1</option>
          <option value="category  2">category 2</option>
          <option value="category  3">category 3</option>
        </select>
        <button type="submit"> ADD BOOK</button>
      </form>
    </div>
  );
}

CreateBook.propTypes = {
  handleCreateBook: PropTypes.func.isRequired,
};

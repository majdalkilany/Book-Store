import React from 'react';
import PropTypes from 'prop-types';
import BookShow from './BookShow';

export default function BooksList({ books, handleDeleteBook }) {
  const handleDelete = (title) => {
    handleDeleteBook(title);
  };
  return (
    <div>
      {books.map((book) => (
        <BookShow key={book.title} book={book} handleDeleteBook={handleDelete} />
      ))}
    </div>
  );
}

const Book = PropTypes.shape({
  title: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(Book).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

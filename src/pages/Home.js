import React, { useState } from 'react';
import CreateBook from '../components/CreateBook';
import BooksList from '../components/BooksList';

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (book) => {
    setBooks([...books, book]);
  };
  const handleDeleteBook = (title) => {
    const updatedBooks = books.filter((bookToDelete) => title !== bookToDelete.title);
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BooksList books={books} handleDeleteBook={handleDeleteBook} />
      <CreateBook handleCreateBook={handleCreateBook} />
    </div>
  );
}

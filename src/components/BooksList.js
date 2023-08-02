import { useSelector } from 'react-redux';
import BookShow from './BookShow';

export default function BooksList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <BookShow
          key={book.item_id}
          book={book}
        />
      ))}
    </div>
  );
}

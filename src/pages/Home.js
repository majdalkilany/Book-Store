import { useDispatch } from 'react-redux';

import CreateBook from '../components/CreateBook';
import BooksList from '../components/BooksList';

import { addBook } from '../redux/store';

export default function Home() {
  const dispatch = useDispatch();

  const handleCreateBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div>
      <BooksList />
      <CreateBook handleCreateBook={handleCreateBook} />
    </div>
  );
}

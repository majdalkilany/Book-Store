// import { useDispatch } from 'react-redux';

import CreateBook from '../components/CreateBook';
import BooksList from '../components/BooksList';

export default function Home() {
  return (
    <div>
      <BooksList />
      <CreateBook />
    </div>
  );
}

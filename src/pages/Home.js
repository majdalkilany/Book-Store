// import { useDispatch } from 'react-redux';

import CreateBook from '../components/CreateBook';
import BooksList from '../components/BooksList';
import './home.css';

export default function Home() {
  return (
    <div>
      <BooksList />
      <div className="Line" />
      <CreateBook />
    </div>
  );
}

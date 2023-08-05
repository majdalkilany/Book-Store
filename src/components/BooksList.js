import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookShow from './BookShow';
import { getAllBooks } from '../redux/store';

import './bookShow.css';

export default function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books);

  return (
    <>
      {Object.keys(books).map((key) => (
        <div key={key} className="Lesson-Panel">
          {books[key].map((book) => (
            <BookShow key={key} book={book} item_id={key} />
          ))}
        </div>
      ))}
    </>
  );
}

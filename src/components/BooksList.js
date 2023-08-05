import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookShow from './BookShow';
import { getAllBooks } from '../redux/store';

export default function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books);

  return (
    <div>
      {Object.keys(books).map((key) => (
        <div key={key}>
          {books[key].map((book) => (
            <BookShow key={key} book={book} item_id={key} />
          ))}
        </div>
      ))}
    </div>
  );
}

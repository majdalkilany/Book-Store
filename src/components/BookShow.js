import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../redux/store';

const BookShow = ({
  book: {
    title, author, category,
  }, item_id,
}) => {
  const dispatch = useDispatch();

  return (

    <div>
      <h4>
        Title:
        {' '}
        {title}

      </h4>
      <h4>
        Author:
        {' '}
        {author}

      </h4>
      <h4>
        Category :
        {' '}
        {category}

      </h4>
      <button
        onClick={() => {
          dispatch(deleteBook({ item_id }));
        }}
        type="button"
      >
        Delete

      </button>

    </div>

  );
};
const BookShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
});

BookShow.propTypes = {
  book: BookShape.isRequired,
  item_id: PropTypes.string.isRequired,

};

export default BookShow;

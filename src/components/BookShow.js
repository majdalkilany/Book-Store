import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/store';

const BookShow = ({
  book: {
    item_id, title, author, category,
  },
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
          dispatch(removeBook({ item_id }));
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
  item_id: PropTypes.string.isRequired,
});

BookShow.propTypes = {
  book: BookShape.isRequired,
};

export default BookShow;

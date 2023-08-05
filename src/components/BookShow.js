import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import img from '../assets/Screenshot01.png';

import { deleteBook } from '../redux/store';

import './bookShow.css';

const BookShow = ({
  book: {
    title, author, category,
  }, item_id,
}) => {
  const dispatch = useDispatch();

  return (

    <>
      <div>
        <p className="category Text-Style-9">
          {' '}
          {category}

        </p>
        <h4 className="Title Text-Style-5">
          {title}

        </h4>
        <p className="author Text-Style-8">
          {author}

        </p>
        <div className="buttons-container">
          <button type="button">Comments</button>
          <div className="Line-2" />
          {' '}
          <button
            onClick={() => {
              dispatch(deleteBook({ item_id }));
            }}
            type="button"
          >
            Remove

          </button>
          <div className="Line-2" />
          <button type="button">Edit  </button>

        </div>

      </div>
      <div className="middle">
        <div className="Oval-2">
          <img src={img} alt="loader" />
        </div>

        <div className="book-status">
          <span className="-Percent-Complete Text-Style-10">
            64%
          </span>
          <span className="Completed Text-Style-2">
            Completed
          </span>
        </div>
      </div>
      <div className="Line" />
      <div className="last-sec-container">
        <span className="Current-Chapter Text-Style-7">
          Current Chapter
        </span>
        <span className="Current-Lesson Text-Style-4">
          Chapter3: ALessonLearned
        </span>
        <button type="button" className="Rectangle-2">
          {' '}
          Update progress
        </button>
      </div>
    </>

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

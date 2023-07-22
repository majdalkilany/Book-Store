import PropTypes from 'prop-types';

const BookShow = ({ handleDeleteBook, book: { title, selectedCategory } }) => {
  const handleDeleteClick = () => {
    handleDeleteBook(title);
  };
  return (

    <div>
      <h4>
        Title:
        {' '}
        {title}

      </h4>
      <h4>
        Category :
        {' '}
        {selectedCategory}

      </h4>
      <button onClick={handleDeleteClick} type="button">Delete </button>

    </div>

  );
};
const BookShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
});

BookShow.propTypes = {
  book: BookShape.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default BookShow;

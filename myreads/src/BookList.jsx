import Book from './Book';
import PropTypes from 'prop-types'

function BookList({books, functions}) {
  return(
    <div className="book-list">
      {
        books.map( (book) => book !== undefined && <Book key={book.id} book={book} functions={functions}/>) 
      
      }
    </div>
  );
}


BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  functions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default BookList;

import Book from './Book';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'

function BookList({books, functions}) {
  console.log('Book Length: ' + books.length)
    if(books.length === 0) return (
      <div className="skeleton-container">
        <div className="skeleton">
          <Skeleton className="skeleton-img" />
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-text"/>
        </div>
        
        <div className="skeleton">
          <Skeleton className="skeleton-img" />
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-text"/>
        </div>
        
        <div className="skeleton">
          <Skeleton className="skeleton-img" />
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-text"/>
        </div>
        
        <div className="skeleton">
          <Skeleton className="skeleton-img" />
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-text"/>
        </div>
      </div>
    )
    else return (
      <div className="book-list">
        {
          books.map( (book) => book !== undefined && <Book key={book.id} book={book} functions={functions}/>) 
        }
      </div>
    )
}


BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  functions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default BookList;

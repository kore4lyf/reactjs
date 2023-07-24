import PropTypes from 'prop-types';

function Book({book}) {
  const getNumOfAuthors = book => {
    if(book.authors) return book.authors.length;
  }
  const getAuthors = book => book.authors;
  const getImageLink = book => {
    if(book.imageLinks) {
      if(book.imageLinks.thumbnail) {
        return book.imageLinks.thumbnail;
      } else if(book.imageLinks.smallThumbnail) {
        return book.imageLinks.smallThumbnail;
      }
    } else {
      return "";
    }

  }

  return(
    <div className="book">
      <img className="image" src={getImageLink(book)} 
        alt={"Cover page for " + book.title}/>
      <div className="details">
        <p className="title"> {book.title}</p>
        <ul className="author-list no-list-style">
           {getNumOfAuthors(book) > 0 && 
            getAuthors(book).map( (author) => (
            <li key={author} className="author"> {book.shelf} {author} </li>))} 
        </ul>
      </div>
    </div> 
  );
}


Book.propTypes = {
  books: PropTypes.object.isRequired
}

export default Book;

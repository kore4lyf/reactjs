import PropTypes from 'prop-types';

function Book({book}) {
  const getNumOfAuthors = book => {
    if(book.authors) return book.authors.length;
  }

  const getAuthors = book => { 
    if (book.authors) return book.authors;
  }

  const getImageLink = book => {
    if(book.imageLinks) {
      if(book.imageLinks.thumbnail) {
        return book.imageLinks.thumbnail;
      } else if(book.imageLinks.smallThumbnail) {
        return book.imageLinks.smallThumbnail;
      }
    }

  }

  return(
    <div className="book">

      <div className="image-container">
        {book.imageLinks !== undefined ?
          <img src={getImageLink(book)} 
          alt={"Cover page for " + book.title}/> :
          <div className="missing-image"> <p>No Image </p> </div> }
         <div className="edit-container">
          <button className="edit"> <span className="fas fa-edit"> </span> </button>
         </div>

        <div className="moveto-container"> 
          <ul className="no-list-style move-to">
            <li className="option active">None</li>
            <li className="option">Reading</li>
            <li className="option">Wish</li>
            <li className="option">Read</li>
          </ul>
        </div>
      </div>
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

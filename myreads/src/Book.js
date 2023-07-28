import PropTypes from 'prop-types';
  
function Book({book, functions}) {
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
          <button onClick={() => ""} className="edit"> <span className="fas fa-edit"> </span> </button>
         </div>

        <div className="moveto-container"> 
          <ul className="no-list-style move-to">
            <li onClick={() => functions.moveTo(book, "")} className={book.shelf === undefined ? "option active" : "option"}>None</li>
            <li onClick={() => functions.moveTo(book, "currentlyReading")} className={book.shelf === "currentlyReading" ? "option active" : "option"}>Reading</li>
            <li onClick={() => functions.moveTo(book, "wantToRead")} className={book.shelf === "wantToRead" ? "option active" : "option"}>Wish</li>
            <li onClick={() => functions.moveTo(book, "read")} className={book.shelf === "read" ? "option active" : "option"}>Read</li>
          </ul>
        </div>
      </div>

      <div className="details">
        <p className="title"> {book.title}</p>
        <ul className="author-list no-list-style">
           {getNumOfAuthors(book) > 0 && 
            getAuthors(book).map( (author) => (
            <li key={author} className="author"> {author} </li>))} 
        </ul>
      </div>
    </div> 
  );
}


Book.propTypes = {
  books: PropTypes.object.isRequired,
  functions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default Book;

import PropTypes from 'prop-types';

function Book({book}) {
  const getNumOfAuthors = book => book.authors.length; 
  const getAuthor = book => book.authors[0];
  const getAuthors = book => book.authors;
  const getImageLink = book => book.imageLinks.thumbnail;

  return(
    <div className="book">
      <img className="image" src={getImageLink(book)} 
        alt={"Cover page for " + book.title}/>
      <div className="details">
        <p className="title"> {book.title}</p>
        <ul className="author-list no-list-style">
           {getNumOfAuthors(book) > 1 ?
            getAuthors(book).map( (author) => (
            <li className="author"> {author} </li>)) :
            <li className="author"> {getAuthor(book)} </li>}
        </ul>
      </div>
    </div> 
  );
}


Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Book;

function WantToRead({books}) {
  const getNumOfAuthors = book => book.authors.length; 
  const getFirstAuthor =  book => book.authors[0];
  const getOtherAuthors = book => book.authors.slice(1,);
  const getImageLink = book => book.imageLinks.thumbnail;

  return(
    <div className="book-list">
    {books.map( (book) => 
      <div key={book.id} className="book">
        <img className="image" src={getImageLink(book)} alt={"Cover page for " + book.title}/>
        <div className="details">
          <p className="title"> {book.title}</p>
          <ul className="author-list no-list-style">
            <li className="author"> {getFirstAuthor(book)} </li> 
            {getNumOfAuthors(book) > 1 && getOtherAuthors(book).map( 
              (author) => (
              <li className="author other-author"> {author} </li> 
              )
            )}
          </ul>
        </div>
      </div> 
    )
    }
    </div>
  );
}

export default WantToRead;

function WantToRead({books}) {
  return(
    <div className="book-list">
    {books.map( (book) => 
      <div key={book.id} className="book">
        <img className="image" src={book.imageLinks.thumbnail} alt={"Cover page for " + book.title}/>
        <div className="details">
          <p className="title"> {book.title}</p>
          <p className="author" title={book.authors.join(" ")}>
            {book.authors.length > 1 ? book.authors[0] + ", ..." : book.authors[0]} 
          </p>
        </div>
      </div> 
    )
    }
    </div>
  );
}

export default WantToRead;

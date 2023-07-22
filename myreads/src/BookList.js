import Book from './Book';

function BookList({books}) {
  return(
    <div className="book-list">
      {books.map( (book) => 
        <Book key={book.id} book={book}/>)}
    </div>
  );
}


export default BookList;

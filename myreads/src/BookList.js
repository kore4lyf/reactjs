import Book from './Book';

function BookList({books, moveTo}) {
  return(
    <div className="book-list">
      {books.map( (book) => 
        <Book key={book.id} book={book} moveTo={moveTo}/>)}
    </div>
  );
}


export default BookList;

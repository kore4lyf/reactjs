import Book from './Book';

function BookList({books, functions}) {
  return(
    <div className="book-list">
      {books.map( (book) => 
        <Book key={book.id} book={book} functions={functions}/>)}
    </div>
  );
}


export default BookList;

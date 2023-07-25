import Header from '../Header';
import SearchInput from '../SearchInput';
import BookList from '../BookList';
import PropTypes from 'prop-types';

function Search({onAction, query, foundBooks, myBooks}) {
  
  const  organizeBooks = (foundBooks, myBooks) => {
    let books = [];

    let myBooksId = myBooks.map( books => books.id );

    foundBooks.forEach( (val, index) => {
      if(myBooksId.includes(val.id)) {
        books.push(myBooks.filter( 
          book => book.id === val.id)[0]);
      } else {
        books.push(val);
      }
    });
    
    return books;
  }

  return(
    <main>
      <Header> My Reads </Header>
      <SearchInput onAction={onAction}/>
      <div className="w-90 mx-auto">
        {foundBooks.length > 0 && <BookList books={organizeBooks(foundBooks, myBooks)}/> }
      </div>
    </main>
  );

}

Search.propTypes = {
  onAction: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  foundBooks: PropTypes.arrayOf(PropTypes.objec).isRequired,
  myBooks: PropTypes.arrayOf(PropTypes.objec).isRequired
}

export default Search;

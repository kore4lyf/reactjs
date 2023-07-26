import logo from './logo.svg';
import {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      error: false,
      errorMsg: "",
      query: "",
      foundBooks: []
    }

  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    }).catch( err => {
        console.log(err);
        this.setState({
          error: true,
          errorMsg: "Unable to fetch books"
        })
      })
  } 


  handleSearch = (e) => {
    let text = e.target.value;
    this.setState({
      query: text
    });
    this.searchBooks(text);
  }


  moveTo = (book, shelf) => {
    BooksAPI.update(book, shelf).then( 
      () => {
        if(book.shelf !== shelf) {
          if(shelf === "") {
            this.setState((prevState) => {
              books: prevState.filter(
                (aBook) => aBook.id !== book.id)
            });
          } else {
            book.shelf = shelf;
            this.setState((prevState) => {
              books: prevState.filter(
                (aBook) => aBook.id !== book.id).concat(book)
            });
          }
        }
      }
    ).catch(  err => {
        console.log(err);
        this.setState({
          error: true,
          errorMsg: "Unable to update books"
        })
      }
    )}


  searchBooks = (query) => {
      if (query.length > 0) {
        BooksAPI.search(query).then( 
          books => {
            if(books.error) {
              this.setState({
                foundBooks: []
              })
            } else {
              this.setState({
              foundBooks: books
            })
            }
          }
        ).catch( 
            err => {
              console.log(err);
              this.setsate({
                error: true, 
                errorMsg: "Unable to fetch books"
              });
            });
      } else {
       this.setState({
        foundBooks: []
       });
      }
    }

  render() { 
    const books = this.state.books;
    
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading");

    const wantToRead = books.filter(
      (book) => book.shelf === "wantToRead");
    
    const read = books.filter(
      (book) => book.shelf === "read");

    return (
      <Routes>
        <Route exact path="/" element={
          <Home currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read} moveTo={this.moveTo} />} />

        <Route path="/search" element={
          <Search onAction={this.handleSearch} 
          query={this.state.query}
          foundBooks={this.state.foundBooks}
          myBooks={this.state.books} moveTo={this.moveTo} />} />
      </Routes>
    );
  }
}

export default App;

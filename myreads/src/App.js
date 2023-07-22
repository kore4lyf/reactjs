import logo from './logo.svg';
import {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      error: false,
      errorMsg: ""
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
          read={read} />} />
      </Routes>
    );
  }
}

export default App;

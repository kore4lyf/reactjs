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
      search: ""
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
    this.setState({
      search: e.target.value
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

        <Route path="/search" element={
          <Search onAction={this.handleSearch}/>} />
      </Routes>
    );
  }
}

export default App;

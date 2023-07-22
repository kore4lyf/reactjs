import logo from './logo.svg';
import {Component} from 'react';
import BookList from './BookList';
import Header from './Header';
import AddBook from './AddBook';
import * as BooksAPI from './BooksAPI';
import {Routes, Route} from 'react-router-dom';
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
      <main>
       <Header>My Reads</Header>
        
        <section className="w-90 mx-auto">
          <div className="sub-header">
            <h2> Currently Reading </h2> 
          </div>
          <div className="currently-reading"> 
            <BookList books={currentlyReading}/>
          </div>
        </section>

        
        <section className="w-90 mx-auto">
          <div className="sub-header">
            <h2> Want To Read </h2> 
          </div>
          <div className="want-to-read"> 
            <BookList books={wantToRead}/>
          </div>
        </section>


        <section className="w-90 mx-auto">
          <div className="sub-header">
            <h2 className="sub-header"> Read </h2> 
          </div>
          <div className="read"> 
            <BookList books={read}/>
          </div>
        </section>

        
        <AddBook/>


        <footer>
          <p className="footer"> &copy; 2023 </p> 
        </footer>
      </main>
    );
  }
}

export default App;

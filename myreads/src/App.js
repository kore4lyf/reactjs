import logo from './logo.svg';
import {Component} from 'react';
import CurrentlyReading from './CurrentlyReading';
import * as BooksAPI from './BooksAPI';
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
        <header>
          <h1 className="header"> My Reads </h1>
        </header> 
        
        
        <section className="w-90 mx-auto">
          <h2 className="sub-header"> Currently Reading </h2> 
          <div className="currently-reading"> 
            <CurrentlyReading books={currentlyReading}/>
            {/*JSON.stringify(currentlyReading)*/}
          </div>
        </section>

        
        <section className="w-90 mx-auto">
          <h2 className="sub-header"> Want To Read </h2> 
          <div className="want-to-read"> 
          
          </div>
          
        </section>


        <section className="w-90 mx-auto">
          <h2 className="sub-header"> Read </h2> 
          <div className="want-to-read"> 
          
          </div>
        </section>


        <footer>
          <p className="footer"> &copy; 2023 </p> 
        </footer>
      </main>
    );
  }
}

export default App;

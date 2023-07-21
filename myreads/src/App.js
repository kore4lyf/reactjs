import logo from './logo.svg';
import {Component} from 'react';
import CurrentlyReading from './CurrentlyReading';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: {}
    }

  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }
  
  render() {
    //console.log(BooksAPI.getAll().then(
    //(data) => JSON.stringify(data))); 

    return (
      <main>
        <header>
          <h1 className="header"> My Reads </h1>
        </header> 
        
        
        <section className="w-90 mx-auto">
          <h2 className="sub-header"> Currently Reading </h2> 
          <div className="currently-reading"> 
            <CurrentlyReading/>
            {JSON.stringify(this.state.books)}
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

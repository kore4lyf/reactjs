import logo from './logo.svg';
import {Component} from 'react';
import CurrentlyReading from './CurrentlyReading';
import * as API from 'BookAPI';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <main>
        <header>
          <h1 class="header"> My Reads </h1>
        </header> 
        
        
        <section class="w-90 mx-auto">
          <h2 class="sub-header"> Currently Reading </h2> 
          <div class="currently-reading"> 
            <CurrentlyReading/>
          </div>
        </section>

        
        <section class="w-90 mx-auto">
          <h2 class="sub-header"> Want To Read </h2> 
          <div class="want-to-read"> 
          
          </div>
          
        </section>


        <section class="w-90 mx-auto">
          <h2 class="sub-header"> Read </h2> 
          <div class="want-to-read"> 
          
          </div>
        </section>


        <footer>
          <p class="footer"> &copy; 2023 </p> 
        </footer>
      </main>
    );
  }
}

export default App;

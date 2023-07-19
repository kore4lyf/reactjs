import logo from './logo.svg';
import {Component} from 'react';
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
        

        </section>

        
        <section class="w-90 mx-auto">
          <h2 class="sub-header"> Want To Read </h2> 
          
          
        </section>


        <section class="w-90 mx-auto">
         <h2 class="sub-header"> Read </h2> 

        </section>


        <footer>
          <p class="footer"> &copy; 2023 </p> 
        </footer>
      </main>
    );
  }
}

export default App;

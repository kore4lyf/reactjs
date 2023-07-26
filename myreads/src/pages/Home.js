import BookList from '../BookList';
import Header from '../Header';
import AddBook from '../AddBook';

function Home({currentlyReading, wantToRead, read, moveTo}) {
 return(
  <main>
   <Header>My Reads</Header>
    
    <section className="w-90 mx-auto">
      <div className="sub-header">
        <h2> Currently Reading </h2> 
      </div>
      <div className="currently-reading"> 
        <BookList books={currentlyReading} moveTo={moveTo}/>
      </div>
    </section>

    
    <section className="w-90 mx-auto">
      <div className="sub-header">
        <h2> Want To Read </h2> 
      </div>
      <div className="want-to-read"> 
        <BookList books={wantToRead} moveTo={moveTo}/>
      </div>
    </section>


    <section className="w-90 mx-auto">
      <div className="sub-header">
        <h2 className="sub-header"> Read </h2> 
      </div>
      <div className="read"> 
        <BookList books={read} moveTo={moveTo}/>
      </div>
    </section>

    
    <AddBook/>


    <footer>
      <p className="footer"> &copy; 2023 </p> 
    </footer>
  </main>
 )

}


export default Home;

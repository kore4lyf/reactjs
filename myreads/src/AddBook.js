import {Link} from 'react-router-dom';

function AddBook() {
  return(
    <Link to="/search" className="add-book" 
    title="Add Book" > + </Link>
  );
}

export default AddBook;

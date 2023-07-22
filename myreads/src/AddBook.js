import {Link} from 'react-router-dom';

function AddBook() {
  return(
    <Link to="/Search" className="add-book" 
    title="Add Book" > + </Link>
  );
}

export default AddBook;

import { Component } from 'react'
import PropTypes from 'prop-types'
  
class Book extends Component {
  constructor(props) {
    super(props)
  }
  
  getNumOfAuthors = book => {
    if(book.authors) return book.authors.length;
  }

  getAuthors = book => { 
    if (book.authors) return book.authors;
  }

  getImageLink = book => {
    if(book.imageLinks) {
      if(book.imageLinks.thumbnail) {
        return book.imageLinks.thumbnail;
      } else if(book.imageLinks.smallThumbnail) {
        return book.imageLinks.smallThumbnail;
      }
    }
  }


  render() {
  
  const { book, functions } = this.props
  return(
    <div className="book" 
        onMouseOut={() => this.movetoContainer.classList.add('hide')}>

      <div className="image-container">
        {book.imageLinks !== undefined ?
          <img src={this.getImageLink(book)} 
          alt={"Cover page for " + book.title}/> :
            <div className="missing-image"> <p>No Image </p> </div> }
         <div className="edit-container">
          <button onClick={() => this.movetoContainer.classList.remove('hide') } className="edit"> <span className="fas fa-edit"> </span> </button>
         </div>

        <div ref={elem => this.movetoContainer = elem} className="hide moveto-container"> 
          <ul className="no-list-style move-to">
            <li onClick={() => functions.moveTo(book, "")} className={book.shelf === undefined ? "option active" : "option"}>None</li>
            <li onClick={() => functions.moveTo(book, "currentlyReading")} className={book.shelf === "currentlyReading" ? "option active" : "option"}>Reading</li>
            <li onClick={() => functions.moveTo(book, "wantToRead")} className={book.shelf === "wantToRead" ? "option active" : "option"}>Wish</li>
            <li onClick={() => functions.moveTo(book, "read")} className={book.shelf === "read" ? "option active" : "option"}>Read</li>
          </ul>
        </div>
      </div>

      <div className="details">
        <p className="title"> {book.title}</p>
        <ul className="author-list no-list-style">
           {this.getNumOfAuthors(book) > 0 && 
            this.getAuthors(book).map( (author) => (
            <li key={author} className="author"> {author} </li>))} 
        </ul>
      </div>
    </div> 
  );
  }
}


Book.propTypes = {
  books: PropTypes.object.isRequired,
  functions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default Book;

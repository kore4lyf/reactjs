import PropTypes from 'prop-types';

function SearchInput({ onAction }) {
  return(
    <div className="search">
      <div className="w-90 mx-auto outer-container">
        <div className="inner-container">
        <input type="text" name="search" onChange={(e) => onAction(e)} placeholder="Search a book"/> 
        <button className="icon"> 
          <span className="fas fa-search"> </span>
        </button>
        </div>
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  onAction: PropTypes.func.isRequired
}

export default SearchInput;

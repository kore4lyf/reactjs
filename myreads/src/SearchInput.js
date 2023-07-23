import PropTypes from 'prop-types';

function SearchInput({ onAction }) {
  return(
    <div className="search">
      <div className="w-90 mx-auto outer-container">
        <div className="inner-container">
        <input type="text" name="search" onChange={(e) => onAction(e)} placeholder="Search a book"/> 
        <button className="icon"> 
          <svg fill="currentColor" version="1.1" 
            viewBox="0 0 488.4 488.4 ">
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7S381.9,104.65,381.9,203.25z"/>
          </svg>
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

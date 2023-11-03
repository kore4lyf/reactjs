import PropTypes from 'prop-types';

function Header({children}) {
  return(
      <header>
        <h1 className="header mx-auto w-90"> {children} </h1>
      </header> 
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired
}

export default Header;

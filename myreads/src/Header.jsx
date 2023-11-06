import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Header({children}) {
  return(
      <header>
        <h1 className="header mx-auto w-90">
          <Link to="/"> 
            {children} 
          </Link>
        </h1>
      </header> 
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired
}

export default Header;

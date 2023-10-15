import React from 'react'
import  { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome' 
import { faListAlt, faCalendarCheck } from '@fortawesome/free-regular-svg-icons' 


const Nav = () => {
  return (
    <nav>
      <ul className="tab">
        <li>
          <a className="active nav__title todo" href="#"> <FA icon={faListAlt}/>  
            <span class="nav__text">
              <span>Todo</span> 
            </span>
          </a>
        </li>
        <li>
          <a className="nav__title goal" href="#"> <FA icon={faCalendarCheck} /> 
            <span class="nav__text">
              <span>Goal</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

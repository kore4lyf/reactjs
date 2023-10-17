import React from 'react'
import  { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome' 
import { 
  faListAlt, 
  faCalendarCheck 
} from '@fortawesome/free-regular-svg-icons' 
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <ul className="tab">
        <li>
          <NavLink activeclassname="active" to="/todo" className="nav__title todo"> 
            <FA icon={faListAlt}/>  
            <span class="nav__text">
              <span>Todo</span> 
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/goal" className="nav__title goal" href="#"> 
            <FA icon={faCalendarCheck} /> 
            <span class="nav__text">
              <span>Goal</span>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

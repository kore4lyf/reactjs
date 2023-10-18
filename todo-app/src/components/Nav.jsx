import React from 'react'
import { 
  List,
  Calendar 
} from 'feather-icons-react'

import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <ul className="switch-to-goal">
        <li>
          <NavLink activeclassname="active" to="/todo" className="nav__title"> 
            <List className="nav__icon"/>
            <span className="nav__text">
              <span>Todo</span> 
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/goal" className="nav__title goal-tab" href="#"> 
            <Calendar className="nav__icon"/>
            <span className="nav__text">
              <span>Goal</span>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

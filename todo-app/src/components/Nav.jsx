import React, { useRef } from 'react'
import { 
  List,
  Calendar 
} from 'feather-icons-react'

import { NavLink } from 'react-router-dom'


const Nav = () => {
  const nav = useRef(null)
  
  const handleTabSlide = () =>  {
    // Temporary (React Router Instead)
    let link = window.location.pathname
    
    if(link.includes('goal')) nav.current.classList.add('switch-to-goal')
    else nav.current.classList.remove('switch-to-goal') 
    
    // Without window.location
    // if(activeTab === 'goal') nav.current.classList.add('switch-to-goal')
    // else nav.current.classList.remove('switch-to-goal') 
  }

  return (
    <nav >
      <ul ref={nav}>
        <li onClick={handleTabSlide}>
          <NavLink activeclassname="active" to="/todo" className="nav__title"> 
            <List className="nav__icon"/>
            <span className="nav__text">
              <span>Todo</span> 
            </span>
          </NavLink>
        </li>
        <li onClick={handleTabSlide}>
          <NavLink activeclassname="active" to="/goal" className="nav__title" href="#"> 
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

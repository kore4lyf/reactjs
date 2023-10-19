import React, { useRef } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import TodoPage from './TodoPage.jsx'
import GoalList from './GoalList.jsx'



function App() {
const count = useRef(0)
  return (
    <Router>
      <main>
        <header>
          <Nav/>
        </header>
        
        <Routes>
          <Route exact path='/' element={<GoalList/>}/>
          <Route exact path='/todo' element={<TodoPage/>}/>
          <Route exact path="/goal" element={<GoalList/>} />          
        </Routes>
      </main>
    </Router>
  )
}

export default App

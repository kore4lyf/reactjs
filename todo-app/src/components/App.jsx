import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import TodoList from './TodoList.jsx'
import GoalList from './GoalList.jsx'



function App() {

  return (
    <Router>
      <main>
        <header>
          <Nav/>
        </header>
        
        <Routes>
          <Route exact path='/' element={<GoalList/>}/>
          <Route exact path='/todo' element={<TodoList/>}/>
          <Route exact path="/goal" element={<GoalList/>} />          
        </Routes>
      </main>
    </Router>
  )
}

export default App

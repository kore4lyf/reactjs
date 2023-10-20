import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import TodoPage from './TodoPage.jsx'
import GoalPage from './GoalPage.jsx'


function App() {
  return (
    <Router>
      <main>
        <header>
          <Nav/>
        </header>
        
        <Routes>
          <Route exact path='/' element={<>Home Page</>}/>
          <Route exact path='/todo' element={<TodoPage/>}/>
          <Route exact path="/goal" element={<GoalPage/>} />          
        </Routes>
      </main>
    </Router>
  )
}

export default App

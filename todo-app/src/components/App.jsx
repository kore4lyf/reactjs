import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import TaskList from './TaskList.jsx'



function App() {

  return (
    <Router>
      <main>
        <header>
          <Nav/>
        </header>
        
        <Routes>
          <Route exact path='/' element={<TaskList/>}/>
          <Route exact path='/todo' element={<TaskList/>}/>
          <Route exact path="/goal" element={<TaskList/>} />          
        </Routes>
      </main>
    </Router>
  )
}

export default App

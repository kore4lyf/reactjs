import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom'
import Nav from './Nav'
import TodoPage from './TodoPage'
import GoalPage from './GoalPage'
import AddEditItem from './AddEditItem'


const multiRoute = (element) => {
  return (...paths) => paths.map( path => <Route key={path} path={path} element={element}/> )
}

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
          <Route exact path='/goal' element={<GoalPage/>} />
          {multiRoute(<AddEditItem />)('/edit', '/add')}
        </Routes>
      </main>
    </Router>
  )
}

export default App

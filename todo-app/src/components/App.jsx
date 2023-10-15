import React from 'react'
import TodoForm from './TodoForm.jsx'
import GoalForm from './GoalForm.jsx'
import Nav from './Nav.jsx'



function App() {

  return (
    <main>
      <header>
        <Nav/>
      </header>
      <TodoForm /> 
      <div>

      </div>

      <br/>

      <GoalForm /> 
      <div>

      </div>

    </main>
  )
}

export default App

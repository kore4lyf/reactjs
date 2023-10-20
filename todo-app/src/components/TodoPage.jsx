import React from 'react'
import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx'

const TodoPage = () => {
  return (
    <div className="todo__page">
     <TodoList /> 
      <AddTodo />
    </div>
  )
}

export default TodoPage 

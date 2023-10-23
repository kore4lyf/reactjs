import React from 'react'
import { createRoot } from 'react-dom/client'
import TodoItem from './TodoItem.jsx'
import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx'

const handleAddTodo = () => {
  const todoList = createRoot(document.querySelector('.todo__list'))
  todoList.render(<TodoItem text=""/>) 
}

const TodoPage = () => {
  return (
    <div className="todo__page">
     <TodoList /> 
      <AddTodo />
    </div>
  )
}

export default TodoPage 

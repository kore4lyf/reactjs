import React from 'react'
import { createRoot } from 'react-dom/client'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

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

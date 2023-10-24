import React from 'react'
import TodoItem from './TodoItem.jsx'



const TodoList = () => {
  return (
    <ul className="todo__list">
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
      <li> <TodoItem text={'Shut the fucking door!'} /> </li>
    </ul>
  )
}

export default TodoList

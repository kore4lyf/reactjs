import React from 'react'
import TodoItem from './TodoItem.jsx'



const TodoList = () => {
  return (
    <div className="todo__list">
     <TodoItem text={'Shut the fucking door!'} />
     <TodoItem text={'Shut the fucking door!'} /> 
     <TodoItem text={'Shut the fucking door!'} /> 
     <TodoItem text={'Shut the fucking door!'} /> 
     <TodoItem text={'Shut the fucking door!'} /> 
     <TodoItem text={'Shut the fucking door!'} /> 
    </div>
  )
}

export default TodoList

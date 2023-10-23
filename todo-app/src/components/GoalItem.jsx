import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { List } from 'feather-icons-react'

const GoalItem = ({goal,todos}) => {
  return (
    <div className="goal__item"> 
      <div className="goal__props"> 
        <List />
        <p> { goal.text } </p>
      </div>

      <ul className="goal__todo">
        {todos.map( (todo) => (
          <li key={todo.id}> 
            <TodoItem  text={todo.text} /> 
          </li>))}
      </ul>
    </div>
  )
}

GoalItem.propTypes = {
  goal: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.object) 
}



export default GoalItem

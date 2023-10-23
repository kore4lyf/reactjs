import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { 
  MoreVertical,
  Award
} from 'feather-icons-react'

const GoalItem = ({goal,todos}) => {
  return (
    <div className="goal__container">
      <div className="goal__item">
        <div className="flex-flow"> 
          <div className="goal__status">
            <div className="status"> </div>
            <Award/>
          </div>
          <p> { goal.text } </p>
        </div>
        <MoreVertical />
      </div>

      <ul className="goal__todos">
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

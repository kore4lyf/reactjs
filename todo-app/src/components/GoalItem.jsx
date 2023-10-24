import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { 
  MoreVertical,
  Award
} from 'feather-icons-react'

const handleShowTodos = (e) => {
  const goalItem = e.target 
  const goalItemClass = goalItem.classList

  if(goalItemClass.contains('close')) goalItemClass.remove('close')
  else goalItemClass.add('close')
}

const GoalItem = ({goal,todos}) => {
  return (
    <div className="goal__container">
      <div className="goal__item close" onClick={(e) => handleShowTodos(e)}>
        <div className="flex-flow"> 
          <div className="goal__status">
            <div className="status"> </div>
            <Award/>
          </div>
          <p> { goal.text } </p>
        </div>

        <button className="no-btn goal__option"> 
          <MoreVertical />
        </button>
      </div>
      <div className="goal__todo__container"> 
        <ul className="goal__todos">
          {todos.map( (todo) => (
            <li key={todo.id}> 
             <TodoItem  text={todo.text} /> 
            </li>))}
        </ul>
      </div>
    </div>
  )
}

GoalItem.propTypes = {
  goal: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.object) 
}



export default GoalItem

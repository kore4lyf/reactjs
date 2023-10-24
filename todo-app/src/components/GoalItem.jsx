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

const handleShowOption = () => {

}

const GoalItem = ({goal,todos}) => {
  return (
    <div className="goal__container">
      <div className="goal__item flex close" onClick={(e) => handleShowTodos(e)}>
        <div className="flex"> 
          <div> <Award/> </div>
          <p className="goal__text"> { goal.text } </p>
        </div>

        <div className="goal__option">

        </div>
        <button className="no-btn goal__option" onClick={handleShowOption}> 
          <MoreVertical />
        </button>
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

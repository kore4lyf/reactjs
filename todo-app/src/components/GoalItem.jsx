import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { 
  Award,
  MoreVertical,
  Plus,
  Trash,
  Edit3
} from 'feather-icons-react'


const GoalItem = ({ goal, todos }) => {
  const goalText = useRef() 
  const goalOption = useRef() 

  const handleShowOption = () => {
    const goalOptionDisplay = goalOption.current.style.display
    const goalOptionIsVisible = () => goalOption.current.style.display === 'block'
    console.log(goalOption.current.style.display)

    if (goalOptionIsVisible()) goalOption.current.style.display = 'none'
    else goalOption.current.style.display = 'block'
  }

  const handleEdit = (goalId) => {

  }

  const handleDeleteGoal = (goalId) => {

  }

  const handleDeleteTodo = (goalId, todoId) => {

  }

  const handleShowTodos = (e) => {
    const goalItem = e.target 
    const goalItemClass = goalItem.classList

    if(goalItemClass.contains('open')) goalItemClass.remove('open')
    else goalItemClass.add('open')
  }

  
  return (
    <div className="goal__container">
      <div className="goal__item flex-start" onClick={(e) => handleShowTodos(e)}>
        <div className="flex-start"> 
          <div> <Award className="goal__item__icon"/> </div>
          <p className="goal__text" ref={goalText}> { goal.text } </p>          
        </div>
        
        <div className="goal__option__container">
          <div className="goal__option" ref={goalOption}>
            <div className="options"> 
              <button className="option flex-flow-0"> <Edit3 size={18}/> Edit </button>
              <button className="option delete flex-flow-0"> <Trash size={18}/> Delete </button>
            </div>
            <div className="tooltip"> </div>
          </div>
          <button className="no-btn goal__option__btn" onClick={handleShowOption}> 
            <MoreVertical />
          </button>
        </div>
      </div>

      <ul className="goal__todos">
        {todos.map( (todo) => (
          <li key={todo.id}> 
            <TodoItem  text={todo.text} /> 
          </li>))}
        <li className="goal__add__todo">
          <button className="flex-flow-0"> <Plus className="icon"/>  <span>Add Todo</span> </button>
        </li>
      </ul>
    </div>
  )
}

GoalItem.propTypes = {
  goal: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.object) 
}



export default GoalItem

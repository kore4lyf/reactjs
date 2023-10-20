import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { 
  CheckSquare,
  Square,
  X
} from 'feather-icons-react'




const TodoItem = ({children}) => {
  const [completed, setCompleted] = useState(false)
  const todo = useRef()

  const handleRemoveTodo = () => {
    todo.current.classList.add('slide-out')
    setTimeout(() => {
      todo.current.remove()
    }, 300)
  }


  const handleCompleted = () => {
    setCompleted(!completed)
  }

  return (
    <div ref={todo} className={`todo__item ${completed === true ? 'completed-todo' : ''}`}>
      <div className={`flex-flow-1rem `}> 
        <div className={`todo__checkbox__container ${completed && 'fade-out'}`}>
          { 
            completed === true ? 
              <CheckSquare onClick={handleCompleted} size={24}/> : 
              <Square onClick={handleCompleted} size={24} />
          }
        </div>
        <p className={`todo__text ${completed && 'strike fade-out'}`}>{children}</p>
      </div>
      <div className="todo__close__container">
        <X className="todo__close" onClick={handleRemoveTodo} />
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  children: PropTypes.string
}

export default TodoItem

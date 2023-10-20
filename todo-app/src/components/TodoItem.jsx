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
      <div className={`flex-flow-1rem ${completed && 'fade-out'}`}> 
        { 
          completed === true ? 
            <CheckSquare onClick={handleCompleted} /> : 
            <Square onClick={handleCompleted} />
        }
        <p className={`todo__name ${completed && 'strike'}`}>{children}</p>
      </div>
      <X className={completed && 'fade-out'} onClick={handleRemoveTodo} />
    </div>
  )
}

TodoItem.propTypes = {
  children: PropTypes.string
}

export default TodoItem

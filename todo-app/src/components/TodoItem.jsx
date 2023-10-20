import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { 
  CheckSquare,
  Square,
  X
} from 'feather-icons-react'




const TodoItem = ({children}) => {
  const [completed, setCompleted] = useState(false)
  const handleCompleted = () => {
    setCompleted(!completed)
  }

  return (
    <div className={`todo__item ${completed && 'completed-todo'}`}>
      <div className={`flex-flow-1rem ${completed && 'fade-out'}`}> 
        { 
          completed === true ? 
            <CheckSquare onClick={handleCompleted} /> : 
            <Square onClick={handleCompleted} />
        }
        <p className={`todo__name ${completed && 'strike'}`}>{children}</p>
      </div>
      <X className={completed && 'fade-out'}/>
    </div>
  )
}

TodoItem.propTypes = {
  children: PropTypes.String
}

export default TodoItem

import React from 'react'
import { 
  Circle,
  CheckCircle,
  X
} from 'feather-icons-react'


const handleCompleted = () => {
  
}


const TodoItem = () => {
  return (
    <div className="todo__item">
      { 
        false === true ? 
          <CheckCircle /> : 
          <Circle />
      }
        <p className="todo__name"> Go for shopping </p>
      <X />
    </div>
  )
}

export default TodoItem

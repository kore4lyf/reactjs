import React from 'react'
import PropTypes from 'prop-types'
import { 
  Circle,
  CheckCircle,
  X
} from 'feather-icons-react'


const handleCompleted = () => {
  
}


const TodoItem = ({children}) => {
  return (
    <div className="todo__item">
      <div className="flex-flow-1rem"> 
        { 
          false === true ? 
            <CheckCircle /> : 
            <Circle />
        }
        <p className="todo__name">{children}</p>
      </div>
      <X />
    </div>
  )
}

TodoItem.propTypes = {
  children: PropTypes.String
}

export default TodoItem

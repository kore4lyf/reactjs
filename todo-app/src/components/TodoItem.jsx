import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { 
  CheckSquare,
  Square,
  X
} from 'feather-icons-react'




const TodoItem = ({text}) => {
  const [completed, setCompleted] = useState(false)
  const todo = useRef()
  const todoText = useRef()

  const handleShowHiddenText = () => {
    const todoTextClass = todoText.current.classList
    const hasClassName = todoTextClass.contains('show-hidden-text')

    if(hasClassName) todoTextClass.remove('show-hidden-text')
    else todoTextClass.add('show-hidden-text')
  }
 
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
    <div ref={todo} onClick={handleShowHiddenText} tabIndex="0" className={`todo__item ${completed === true ? 'completed-todo' : ''}`}>
      
      <div className={`flex-flow-1rem`}> 
        <div className="todo__checkbox__container"> 
          <button className={`no-btn ${completed && 'fade-out'}`} onClick={handleCompleted}>
          { 
            completed === true ? 
              <CheckSquare  size={20}/> : 
              <Square size={20} />
          }
          </button>
        </div>
        
        <div>
          <p contentEditable={!completed && "true"} ref={todoText} 
            className={`todo__text ${completed && 'strike fade-out'}`}
            suppressContentEditableWarning="true">{text}</p>
        </div>
      </div>

      <div className="todo__close__container">
        <button className="no-btn todo__close" onClick={handleRemoveTodo}>
          <X size={20}/>
        </button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string
}

export default TodoItem

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({children, complete}) => {
  return (
    <>
      <input type="checkbox" name="complete" checked={!complete && checked} />
      <span> { children } </span> 
      <button> D </button>
    </>
  )
}

Todo.propTypes = {
  children: PropTypes.string.isRequired,
  complete: PropTypes.boolean.isRequired
}

export default Todo

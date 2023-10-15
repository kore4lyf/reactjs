import React from 'react'
import PropTypes from 'prop-types'

const TodoForm = () => {
  return (
    <section>
      <form onSubmit={""}>
        <input type="text" name="todo" placeholder="Todo" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default TodoForm

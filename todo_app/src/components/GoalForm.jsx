import React from 'react'
import PropTypes from 'prop-types'

const GoalForm = () => {
  return (
    <section>
      <h2> TODO </h2> 
      <form onSubmit={""}>
        <input type="text" name="goal" placeholder="Goal" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default GoalForm

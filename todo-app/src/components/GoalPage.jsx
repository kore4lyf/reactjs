import React from 'react'
import GoalList from './GoalList'
import AddGoal from './AddGoal'

const GoalPage = () => {
  return (
    <div className="goal__page">
      <GoalList />
      <AddGoal />
    </div>
  )
}

export default GoalPage

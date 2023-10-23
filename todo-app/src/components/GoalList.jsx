import React from 'react'
import GoalItem from './GoalItem.jsx'

const GoalList = () => {
  const goal = {
    id: Date.now(),
    text: 'Climb mountain everest',
    startDate: '11/27/2023',
    endDate: '11/30/2025',
    reminder: {
      time: "timestamp",
      date: "timestamp",
      frequent: 1,
    },
    daily: true,
    today: {
      state: false,
      startTime: "timestamp",
      endTime: "timestamp"
    },
    todos:[
      {id: Date.now(), text: 'Korede'},
      {id: Date.now(), text: 'Faith'},
      {id: Date.now(), text: 'Dozie'},
    ],
  }

  return (
    <div className="goal__list">
     <GoalItem goal={goal} todos={goal.todos} /> 
    </div>
  )
}

export default GoalList

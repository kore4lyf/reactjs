import React from 'react'
import GoalItem from './GoalItem.jsx'

const GoalList = () => {
  const goal = {
    id: 1,
    text: 'Climb mountain everest',
    todos:[
      {id: 1, complete: true, text: 'Korede'},
      {id: 2, complete: false, text: 'Faith'},
      {id: 3, complete: false, text: 'Dozie'},
    ]
  }

  const goal1 = {
    id: 1,
    text: 'Be the baddest programmer in the world. Be the baddest programmer in the world. Be the baddest programmer in the world. ',
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
      {id: 0, complete: false, text: 'Dozie'},
      {id: 1, complete: true, text: 'Korede'},
      {id: 2, complete: false, text: 'Faith'},
      {id: 3, complete: false, text: 'Dozie'},
      {id: 4, complete: false, text: 'Dozie'},
      {id: 5, complete: false, text: 'Dozie'},
      {id: 6, complete: false, text: 'Dozie'},
      {id: 7, complete: false, text: 'Dozie'},
      {id: 8, complete: false, text: 'Dozie'},
      {id: 9, complete: false, text: 'Dozie'},
    ]
  }

  return (
    <div className="goal__list">
     <GoalItem goal={goal} todos={goal.todos} /> 
     <GoalItem goal={goal1} todos={goal1.todos} /> 
     <GoalItem goal={goal} todos={goal.todos} /> 
    </div>
  )
}

export default GoalList

import {
	ADD_GOAL,
	UPDATE_GOAL,
	DELETE_GOAL,
	RECIEVE_GOALS,
	ADD_GOAL_TODO,
	UPDATE_GOAL_TODO,
	DELETE_GOAL_TODO
} from '../actions/goal.js'

export default function goals(state = [], action) {
	switch(action.type) {
		case ADD_GOAL: 
			return [
				...state,
				action.goal
			]

		case UPDATE_GOAL:
			return state.map((goal) => {
				if(goal.id === action.id) return { ...goal, ...action.goal }
				else return goal
			})	

		case DELETE_GOAL:
			return state.filter((goal) => goal.id !== action.id)

		case RECIEVE_GOALS:
			return action.goals

		case ADD_GOAL_TODO:
			return state.map((goal) => {
				if(goal.id === action.id) return {...goal, todos: [...goal.todos, action.todo]}
				else return goal
			})
			

		case UPDATE_GOAL_TODO:
			return state.map((goal) => {
				if(goal.id === action.goalId) {
					const newTodos = goal.todos.map((todo) => {
						if(todo.id === action.todoId) return {...todo, ...action.todo} 
						else return todo
					})

					return {...goal, todos: newTodos}
				} 
				else return goal
			})

		case DELETE_GOAL_TODO:
			return state.map((goal) => {
				if (goal.id === action.goalId) {
					const newTodos = goal.todos.filter((todo) => todo.id !== action.todoId)
					return {...goal, todos: newTodos}
				} else return goal
			})

		default: 
			return state
	}
}

import {
	ADD_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	RECIEVE_TODOS 
} from '../actions/todo.js'
	

export default function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return [
				...state,
				action.todo
			]

		case UPDATE_TODO:
			return state.map((todo) => {
				if(todo.id === action.id) return { ...todo, ...action.todo }	
				else return todo 
			})

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.id) 

		case RECIEVE_TODOS:
			return action.todos

		default: 
			return state
	}
}

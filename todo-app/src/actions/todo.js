export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const RECIEVE_TODOS = 'RECIEVE_TODOS'

// Add Todo 
function addTodo(todoItem) {
	return {
		type: ADD_TODO,
		todoItem
	}
}

export function handleAddTodo(todoItem) {
	return (dispatch) => {

		return dispatch(addTodo(todoItem))
	}
}


// Update Todo 
function updateTodo(id, todo) {
	return {
		type: UPDATE_TODO,
		id,
		todo
	}
}

export function handleUpdateTodo(id, todo) {
	return (dispatch) => {
		return dispatch(updateTodo(id, todo))
	}
}


// Delete Todo 
function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		id
	}
}

export function handleDeleteTodo(id) {
	return (dispatch) => {
		return dispatch(deleteTodo(id))
	}
}

// Recieve Todo 
function recieveTodos(id, todos) {
	return {
		type: RECIEVE_TODOS, 
		todos
	}
}

export function handleRecieveTodos(todos) {
	return (dispatch) => {
		return dispatch(recieveTodos(todos))
	}
}


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
function updateTodo(todoItem) {
	return {
		type: UPDATE_TODO,
		todoItem
	}
}

export function handleUpdateTodo(todoItem) {
	return (dispatch) => {
		return dispatch(updateTodo(todoItem))
	}
}


// Delete Todo 
function deleteTodo(todoId) {
	return {
		type: DELETE_TODO,
		todoId
	}
}

export function handleDeleteTodo(todoId) {
	return (dispatch) => {
		return dispatch(updateTodo(todoId))
	}
}

// Recieve Todo 
function recieveTodos(todos) {
	return {
		type: RECEIVE_TODOS, 
		todos
	}
}

export handleRecieveTodos(todos) {
	return (dispatch) => {
		return dispatch(recieveTodos(todos))
	}
}


export const ADD_GOAL ='ADD_GOAL'
export const UPDATE_GOAL = 'UPDATE_GOAL'
export const DELETE_GOAL = 'DELETE_GOAL'
export const ADD_GOAL_TODO = 'ADD_GOAL_TODO'
export const UPDATE_GOAL_TODO = 'UPDATE_GOAL_TODO'
export const DELETE_GOAL_TODO = 'DELETE_GOAL_TODO'
export const RECIEVE_GOALS = 'RECEIVE_GOALS'

// Add goal
function addGoal(goal) {
	return {
		type: ADD_GOAL,
		goal
	}
}


export function handleAddGoal(goal) {
	return (dispatch) => {
		return dispatch(addGoal(goal))
	}
}

// Update Goal 
function updateGoal(id, goal) {
	return {
		type: UPDATE_GOAL,
		id,
		goal
	}
}

export function handleUpdateGoal(id, goal) {
	return (dispatch) => {
		return dispatch(updateGoal(id,goal))
	}
}


// Delete Goal 
function deleteGoal(goalId) {
	return {
		type: DELETE_GOAL,
		goalId
	}
}

export function handleDeleteGoal(goalId) {
	return (dispatch) => {
		return dispatch(deleteGoal(goalId))
	}
}


// Recieve Goals 
function recieveGoals(goals) {
	return {
		type: RECIEVE_GOALS,
		goals
	}
}

export function handleRecieveGoals(goals) {
	return (dispatch) => {
		return dispatch(recieveGoals(goals))
	}
}


// Add Goal Todo 
function addGoalTodo(todo) {
	return {
		type: ADD_GOAL_TODO,
		todo
	}
}


export function handleAddGoalTodo(todo) {
	return (dispatch) => {
		return dispatch(addGoalTodo(todo))
	}
}


// Update Goal Todo 
function updateGoalTodo(id, todo) {
	return {
		type: UPDATE_GOAL_TODO,
		id,
		todo
	}
}


export function handleUpdateGoalTodo(id, todo) {
	return (dispatch) => {
		return dispatch(updateGoalTodo(id, todo))
	}
}


// Delete Goal Todo 
function deleteGoalTodo(goalId, todoId) {
	return {
		type: DELETE_GOAL_TODO,
		goalId,
		todoId
	}
}


export function handleDeleteGoalTodo(todoId) {
	return (dispatch) => {
		return dispatch(deleteGoalTodo(todoId))
	}
}



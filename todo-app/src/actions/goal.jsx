export const ADD_GOAL ='ADD_GOAL'
export const UPDATE_GOAL = 'UPDATE_GOAL'
export const DELETE_GOAL = 'DELETE_GOAL'
export const ADD_GOAL_TODO = 'ADD_GOAL_TODO'
export const UPDATE_GOAL_TODO = 'UPDATE_GOAL_TODO'
export const DELETE_GOAL_TODO = 'DELETE_GOAL_TODO'

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
function updateGoal(goal) {
	return {
		type: UPDATE_TODO,
		goal
	{
}

export function handleUpdateGoal(goal) {
	return (dispatch) => {
		return dispatch(update(goal))
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
		return dispatch(goalId)			
	}
}


// Add Goal Todo 
function addGoalTodo(todo) {
	return {
		type: ADD_GOAL_TODO,
		todo
	}
}


function handleAddGoalTodo(todo) {
	return (dispatch) => {
		return dispatch(addGoalTodo(todo))
	}
}


// Update Goal Todo 
function updateGoaTodo(todo) {
	return {
		type: UPDATE_GOAL_TODO,
		todo
	}
}


function handleUpdateGoalTodo(todo) {
	return (dispatch) => {
		return dispatch(updateGoalTodo())
	}
}


// Delete Goal Todo 
function deleteGoalTodo(todoId) {
	return (dispatch) => {
		type: DELETE_GOAL_TODO,
		todoId
	}
}


function handleDeleteGoalTodo(todoId) {
	return (dispatch) => {
		return dispatch(deleteGoalTodo(todoId))
	}
}

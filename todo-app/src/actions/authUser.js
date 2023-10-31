export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_DETAILS = 'UPDATE_DETAILS' 


// Login 
function login(userDetails) {
	return {
		type: LOGIN,
		userDetails
	}
}

export function handleLogin(userDetails) {
	return (dispatch) => {
		return dispatch(login(userDetails))	
	}
}

// Logout 
function logout() {
	return {
		type: LOGOUT
	}
}

export function handleLogout() {
	return (dispatch) => {
		return dispatch(logout())
	}
}

// Update Details 
function updateDetails(newUserDetails) {
	return {
		type: UPDATE_DETAILS, 
		newUserDetails
	}
}

export function handleUpdateDetails(newUserDetails) {
	return (dispatch) => {
		dispatch(updateDetails(newUserDetails))
	}
}

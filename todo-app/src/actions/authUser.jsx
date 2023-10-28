export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


// Login 
function login(userDetails) {
	return {
		type: LOGIN,
		userDetails
	}
}

export function handleLogin() {
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

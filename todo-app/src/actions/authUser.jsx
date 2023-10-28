export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


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


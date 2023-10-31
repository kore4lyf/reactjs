import { 
	LOGIN,
	LOGOUT,
	UPDATE_DETAILS
} from '../actions/authUser'

export default function authUser(state = {}, action) {
	switch(action.type) {
		case LOGIN: 
			return action.userDetails

		case LOGOUT: 
			return {}

		case UPDATE_DETAILS: 
			return {
				...state,
				...action.newUserDetails 
		}

		default: 
			return state
	}
}

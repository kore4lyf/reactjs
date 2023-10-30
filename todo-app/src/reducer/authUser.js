import { 
	LOGIN,
	LOGOUT
} from '../actions/authUser'

export default function authUser(state = {}, action) {
	switch(action.type) {
		case LOGIN: 
			return action.userDetails

		case LOGOUT: 
			return {}
	}
}

import { combineReducers } from 'redux'
import todos from './todos'
import goals from './goals'
import authUser from './authUser'
import modal from './modal'

export default combineReducers({
	todos,
	goals,
	authUser,
	modal
})

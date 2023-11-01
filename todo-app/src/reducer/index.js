import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import todos from './todos'
import goals from './goals'
import authUser from './authUser'
import modal from './modal'

export default combineReducers({
	todos,
	goals,
	authUser,
	modal,
	loadingBar: loadingBarReducer
})

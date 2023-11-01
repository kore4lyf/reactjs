import {
	showLoading,
	hideLoading 
} from 

export function handleInitData() {
	return (dispatch) => {
		dispatch(showLoading)

		dispatch(hideLoading)
	}
}

import {
	OPEN_MODAL,
	CLOSE_MODAL
} from '../actions/modal.js'

export default function modal(state = {}, action) {
	switch(action.type) {
		case OPEN_MODAL: 
			return {
				action.modelData
			}
		case CLOSE_MODAL:	
			return {}
	}
}

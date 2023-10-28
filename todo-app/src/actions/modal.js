export OPEN_MODAL = 'OPEN_MODAL'
export CLOSE_MODAL = 'CLOSE_MODAL' 

// Open Modal
function openModal(modalData) {
	return {
		type: OPEN_MODAL,
		modalData
	}
}

export function handleOpenModal(modalData) {
	return (dispatch) => {
		dispatch(openModal(modalData))
	}
}

// Close Modal 
function closeModal() {
	return {
		type: CLOSE_MODAL
	}
} 

export function handleCloseModal() {
	return (dispatch) => {
		dispatch(closeModal())
	}
}

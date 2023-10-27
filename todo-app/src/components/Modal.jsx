import React from 'react'
import { AlertCircle } from 'feather-icons-react'

function Modal() {
  const handleCancel = () => {

  }

  const handleAction = () => {
    
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div>
        <p className="modal__title flex-flow-0"><AlertCircle/> <span>Delete</span> </p>  
        <p className="modal__text"> Would you like to delete this goal? </p>
        </div>
        <div className="flex modal__btns">
          <button className="modal__btn"> Cancel </button>
          <button className="modal__btn"> Delete </button>
        </div>
      </div>
    </div>
  )
}


export default Modal

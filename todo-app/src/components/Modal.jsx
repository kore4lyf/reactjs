import React from 'react'

function Modal() {
  const handleCancel = () => {

  }

  const handleAction = () => {
    
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div>
        <p className="modal__title"> Delete </p>  
        <p className="modal__text"> Would you like to delete this goal? aksjdfkajsfklja askdfjkasjfla dfkajkfjaks fkasj faksjfklajs dkfjasd fkafjajd</p>
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

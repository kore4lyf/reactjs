import React from 'react'

function AddEditItem() {
  return (
    <div className="add-edit-item-page">
      <div className="editor">
        <h1> Goal </h1> 
        <p contentEditable="true" suppressContentEditableWarning="true">
          Korede
        </p>
      </div>
    </div>
  )
}

export default AddEditItem

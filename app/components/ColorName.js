import React, { PropTypes } from 'react'

const ColorName = ({color, onTextChangeSubmit, onTextEdit, onColorNameReset, onToggleColorPicker}) => {
  // FIXME: Passing these callback functions WAY down the tree, refactor

  return (
    <div>
      <input type="text"
        className='color-text'
        value={color.editedColor || color.color}
        onChange={(e) => onTextEdit(color.id, e.target.value)}
        onBlur={(e) => onTextChangeSubmit(color.id, color.editedColor)}/>
    </div>
  )
}

ColorName.propTypes = {
  color: PropTypes.object.isRequired
}

export default ColorName
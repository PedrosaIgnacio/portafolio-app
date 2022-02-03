import React from 'react'

const FormatInput = ({ type, name, id, placeholder, onchange, size }) => {
  return (
    <div className="row justify-content-center">
      <div className="form-group col-auto">
        <label className="form-label lead">{name}</label>
        <input
          className="form-control"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onchange}
          maxLength={size}
        />
      </div>
    </div>
  )
}

export default FormatInput

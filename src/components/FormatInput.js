import React from "react";

const FormatInput = ({ type, name, id, placeholder }) => {
  return (
    <div className="row justify-content-center">
      <div className="form-group col-md-4">
        <label className="form-label lead">{name}</label>
        <input
          className="form-control"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormatInput;

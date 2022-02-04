import React from 'react'
import { ErrorMessage, useField } from 'formik'
const FormikInput = ({ label, name, ...props }) => {
  const [_, meta, helper] = useField(name)
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="text-capitalize lead">
          {label}
        </label>
        <input
          className={`form-control ${
            meta.error && meta.touched && 'is-invalid'
          }`}
          {...props}
          onChange={(e) => helper.setValue(e.target.value)}
          onBlur={() => helper.setTouched(true)}
        />
        <ErrorMessage
          component="div"
          name={name}
          className={`error ${
            meta.error && meta.touched ? 'errorTrue' : 'errorFalse'
          }`}
        />
      </div>
    </>
  )
}

export default FormikInput

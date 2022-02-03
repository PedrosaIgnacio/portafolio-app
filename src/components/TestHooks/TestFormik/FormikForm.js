import React from 'react'
import { Formik } from 'formik'

const FormikForm = () => {
  return (
    <>
      <Formik initialValues={{ email: '' }} validationSchema={}></Formik>
    </>
  )
}

export default FormikForm

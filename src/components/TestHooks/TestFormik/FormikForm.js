import React from 'react'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import FormatInput from '../../FormatInput'
import * as yup from 'yup'
const validateContactForm = yup.object().shape({
  name: yup.string().required().max(10),
  email: yup.string().email(),
})

const FormikForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validateContactForm}
      >
        <Form>
          <FormatInput />
          <FormatInput />
        </Form>
      </Formik>
    </>
  )
}

export default FormikForm

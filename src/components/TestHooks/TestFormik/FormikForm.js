import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import { Card } from "react-bootstrap";
import "./Formik.css";
const FormikForm = () => {
  const validateContactForm = yup.object({
    name: yup.string().required().max(10, "Must be less then 10 characters"),
    email: yup.string().email("Invalid email").required(),
  });
  const initialValues = {
    name: "",
    email: "",
  };
  return (
    <div className="m-4">
      <Card
        style={{ borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5 cardd"
      >
        <Card.Title className="text-center h2">
          DYNAMIC VALIDATION FORM
        </Card.Title>
        <hr style={{ border: "solid 1px" }} />

        <Card.Body className="d-flex justify-content-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validateContactForm}
          >
            {(formik) => (
              <Form>
                <FormikInput label="name" name="name" type="text" />
                <FormikInput label="email" name="email" type="text" />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark mt-3">
                    SEND
                  </button>
                  <button type="reset" className="btn btn-dark mt-3 mx-3 ">
                    RESET
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormikForm;

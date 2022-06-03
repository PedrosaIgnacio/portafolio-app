import React from "react";
import { Card } from "react-bootstrap";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import toast from "react-hot-toast";
import "./MailCard.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
init("user_iWcWSTmDgaWt2LQh7MCT7");

const MailCard = () => {
  const validateContactForm = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    name: yup.string().max(30, "Must be less then 30 characters"),
    subject: yup
      .string()
      .max(20, "Must be less then 20 characters")
      .required("Subject is required"),
    message: yup
      .string()
      .max(50, "Must be less then 50 characters")
      .required("Message is required"),
  });
  const initialValues = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const test = emailjs.sendForm(
      "service_q4gg2vc",
      "template_f49j2jo",
      "#myform"
    );
    console.log(test);
    toast.promise(test, {
      loading: "Sending...",
      success: "Email sent",
      error: "Something went wrong",
    });

    e.target.reset();
  };

  return (
    <div className="m-4">
      <Card
        style={{
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5 cardd"
      >
        <Card.Subtitle className="text-center">
          <p className="h2">SEND MESSAGE</p>
        </Card.Subtitle>

        <Card.Body>
          <Formik
            onSubmit={sendEmail}
            id="myform"
            initialValues={initialValues}
            validationSchema={validateContactForm}
          >
            <Form>
              <div className="row justify-content-center">
                <div className="form-group col-md-6">
                  <label className="form-label lead">Email</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="field-error text-danger m-0 p-0"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label className="form-label lead">Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="field-error text-danger m-0 p-0"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="form-group col-md-6">
                  <label className="form-label lead">Subject</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component="small"
                    className="field-error text-danger m-0 p-0"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label className="form-label lead">Message</label>
                  <Field
                    as="textarea"
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Enter message"
                  />
                  <ErrorMessage
                    name="message"
                    component="small"
                    className="field-error text-danger m-0 p-0 "
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="form-group"></div>
                <button type="submit" className="btn btn-dark lead col-auto">
                  SEND MESSAGE
                </button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MailCard;

import React from "react";
import { Form, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import toast from "react-hot-toast";
import "./MailCard.css";
init("user_iWcWSTmDgaWt2LQh7MCT7");

const MailCard = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const test = emailjs.sendForm(
      "service_q4gg2vc",
      "template_f49j2jo",
      "#myform"
    );
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
          <Form onSubmit={sendEmail} id="myform">
            <div className="row justify-content-center">
              <div className="form-group col-md-4">
                <label className="form-label lead">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group col-md-4">
                <label className="form-label lead">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="form-group col-md-4">
                <label className="form-label lead">Subject</label>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group col-md-4">
                <label className="form-label lead">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="1"
                  placeholder="Enter message"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="form-group"></div>
              <input
                type="submit"
                className="btn btn-dark lead col-auto"
                value="SEND MESSAGE"
              />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MailCard;

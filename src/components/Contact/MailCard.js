import React, { useState } from 'react'
import { Form, Card } from 'react-bootstrap'
import QrCard from './QrCard'
import SocialMediaCard from './SocialMedia/SocialMediaCard'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
import toast from 'react-hot-toast'
init('user_iWcWSTmDgaWt2LQh7MCT7')

const MailCard = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    const test = emailjs.sendForm(
      'service_q4gg2vc',
      'template_f49j2jo',
      '#myform',
    )
    toast.promise(test, {
      loading: 'Sending...',
      success: 'Email sent',
      error: 'Something went wrong',
    })

    e.target.reset()
  }

  return (
    <div className="m-4 col-md-8">
      <Card
        style={{
          borderRadius: '15px',
        }}
        className="shadow-lg p-3 mb-5"
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
      <hr style={{ border: 'solid 1px' }} />
      <div className="mt-4">
        <SocialMediaCard />
      </div>
      <hr style={{ border: 'solid 1px' }} />

      <div className="mt-4 text-center">
        <p className="h2">OR</p>
        <div className="mt-4 ">
          <p className="h2 ">
            <a
              className="text-decoration-none"
              href="https://linktr.ee/nachopedrosa"
            >
              Linktree
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <QrCard />
      </div>
    </div>
  )
}

export default MailCard
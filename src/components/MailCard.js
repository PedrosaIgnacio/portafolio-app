import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import QrCard from "./QrCard";
import SocialMediaCard from "./SocialMediaCard";
const MailCard = () => {
  return (
    <div className="m-4 col-md-8">
      <Card style={{ borderRadius: "15px" }} className="shadow-lg p-3 mb-5">
        <Card.Subtitle className="text-center">
          <p className="h2">SEND MESSAGE</p>
        </Card.Subtitle>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Some text" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <SocialMediaCard />
      </div>
      <div className="mt-4 text-center">
        <p className="h2">OR</p>
      </div>
      <div className="mt-4">
        <QrCard />
      </div>
    </div>
  );
};

export default MailCard;

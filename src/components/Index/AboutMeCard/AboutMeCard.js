import React from "react";
import { Card } from "react-bootstrap";
import "./AboutMeCard.css";
const AboutMeCard = () => {
  return (
    <div className="m-4">
      <Card
        style={{ borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5 cardd"
      >
        <Card.Title className="text-center">
          <p className="h2">ABOUT ME</p>
          <div className="d-flex justify-content-center">
            <hr style={{ border: "solid 1px", width: "75%" }} />
          </div>
        </Card.Title>
        <Card.Body className="lead">
          <p className="text-justify">
            Hi! I'm Ignacio Nicolas, Pedrosa from Argentina. I consider myself
            reliable and easy to work with. I like learning new things, for
            personal growth and to become a better developer.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMeCard;

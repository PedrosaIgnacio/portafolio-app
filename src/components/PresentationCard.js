import React from "react";
import { Card } from "react-bootstrap";
import CardImage from "../img/cardimage.jpeg";
import LocationCard from "./LocationCard";

const Cards = () => {
  return (
    <div className="m-4">
      <Card
        style={{
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5"
      >
        <div>
          <Card.Img
            variant="top"
            src={CardImage}
            className="img-responsive rounded-circle mx-auto mt-2 mb-4 p-3"
          />
        </div>
        <Card.Body>
          <Card.Title className="mb-2">
            NATIONAL TECHNOLOGICAL UNIVERSITY
          </Card.Title>
          <p className="lead">I'm a Systems Engineering student (3rd Year)</p>
          <Card.Subtitle className="my-2">ENCODE SA</Card.Subtitle>
          <p className="lead">Full Stack Developer</p>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <LocationCard />
      </div>
    </div>
  );
};

export default Cards;

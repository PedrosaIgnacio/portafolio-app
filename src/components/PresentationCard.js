import React from "react";
import { Card, Container } from "react-bootstrap";
import CardImage from "../img/cardimage.jpeg";
import LocationCard from "./LocationCard";

const Cards = () => {
  return (
    <Container className="mt-4">
      <Card
        style={{
          width: "18rem",
          height: "30rem",
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5"
      >
        <Card.Img
          style={{ width: "12rem", height: "12rem", borderRadius: "6rem" }}
          variant="top"
          src={CardImage}
          className="img-responsive mx-auto mt-4 mb-4"
        ></Card.Img>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            UNIVERSIDAD TECNOLOGICA NACIONAL
          </Card.Subtitle>
          I'm a systems Engineering student (3rd Year)
          <Card.Subtitle className="mb-2 mt-2 text-muted">
            ENCODE SA
          </Card.Subtitle>
          Full Stack Developer
        </Card.Body>
      </Card>
      <div className="mt-4">
        <LocationCard />
      </div>
    </Container>
  );
};

export default Cards;

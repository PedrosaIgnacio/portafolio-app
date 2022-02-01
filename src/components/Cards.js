import React from "react";
import { Card, Container } from "react-bootstrap";
import CardImage from "../img/cardimage.jpeg";
import ExtraCard from "./ExtraCard";

const Cards = () => {
  return (
    <Container>
      <Card style={{ width: "18rem", height: "30rem", borderRadius: "15px" }}>
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
          Estudiante de Ingeniería en Sistemas de Informacion (Cursando 3er Año)
          <Card.Subtitle className="mb-2 mt-2 text-muted">
            ENCODE SA
          </Card.Subtitle>
          Full Stack Developer
        </Card.Body>
      </Card>
      <div className="mt-4">
        <ExtraCard />
      </div>
    </Container>
  );
};

export default Cards;

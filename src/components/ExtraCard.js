import React from "react";
import { Card, Container } from "react-bootstrap";

const ExtraCard = () => {
  return (
    <>
      <Card style={{ width: "18rem", height: "15rem", borderRadius: "15px" }}>
        <Card.Body>
          <Card.Title className="text-muted">ARGENTINA</Card.Title>
          Córdoba, Capital.
        </Card.Body>
      </Card>
    </>
  );
};

export default ExtraCard;

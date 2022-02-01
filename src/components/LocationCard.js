import React from "react";
import { Card } from "react-bootstrap";

const ExtraCard = () => {
  return (
    <>
      <Card
        style={{ width: "18rem", height: "15rem", borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5"
      >
        <Card.Body>
          <Card.Title>LOCATION</Card.Title>
          <Card.Subtitle className="text-muted mt-2 mb-2">
            ARGENTINA
          </Card.Subtitle>
          Córdoba, Capital.
        </Card.Body>
      </Card>
    </>
  );
};

export default ExtraCard;

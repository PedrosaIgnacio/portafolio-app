import React from "react";
import { Card } from "react-bootstrap";

const LocationCard = () => {
  return (
    <Card style={{ borderRadius: "15px" }} className="shadow-lg p-3 mb-5">
      <Card.Body>
        <Card.Title>LOCATION</Card.Title>
        <Card.Subtitle className="text-muted mt-2 mb-2">
          ARGENTINA
        </Card.Subtitle>
        <p className="lead">Córdoba, Capital.</p>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217954.2534022472!2d-64.33442911558893!3d-31.399377044309926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1643754955385!5m2!1ses!2sar"
            style={{
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;

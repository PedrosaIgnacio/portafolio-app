import React from "react";
import { Card } from "react-bootstrap";
import "./LocationCard.css";
const LocationCard = () => {
  return (
    <div className="m-4">
      <Card
        style={{ borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5 cardd"
      >
        <Card.Body>
          <Card.Title className="text-center">
            <p className="h2">LOCATION</p>
            <div className="d-flex justify-content-center">
              <hr style={{ border: "solid 1px", width: "75%" }} />
            </div>
          </Card.Title>
          <Card.Subtitle className="text-muted mt-2 mb-2 text-center">
            ARGENTINA
          </Card.Subtitle>
          <p className="lead text-center">Córdoba, Capital.</p>
          <div>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d64790.09351910392!2d-64.20756545412449!3d-31.411099768191548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1643844799528!5m2!1ses!2sar"
              allowFullScreen
              style={{ width: "100%" }}
            ></iframe>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LocationCard;

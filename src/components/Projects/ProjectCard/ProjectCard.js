import React from "react";
import { Col, Card } from "react-bootstrap";

const ProjectCard = ({ name, url, img }) => {
  return (
    <Col className="justify-content-center d-flex">
      <Card
        style={{ width: "18rem", borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center mt-3">{name}</Card.Title>
          <div className="justify-content-center d-flex mt-5">
            <a className="btn btn-primary" href={url}>
              Go visit
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;

import React from "react";
import { Card } from "react-bootstrap";

const ProjectCard = ({ name, url }) => {
  return (
    <div className="m-4">
      <a href={url} style={{ textDecoration: "none", color: "black" }}>
        <Card
          style={{
            borderRadius: "15px",
          }}
          className="shadow-lg p-3 mb-5 cardd"
        >
          <Card.Title className="text-center">{name}</Card.Title>
        </Card>
      </a>
    </div>
  );
};

export default ProjectCard;

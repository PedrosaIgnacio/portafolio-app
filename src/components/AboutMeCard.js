import React from "react";
import { Card, Container } from "react-bootstrap";
import SkillsCard from "./SkillsCard";

const AboutMeCard = () => {
  return (
    <Container className="mt-4">
      <Card style={{ borderRadius: "15px" }} className="shadow-lg p-3 mb-5">
        <Card.Title className="text-center">
          <p className="h2">ABOUT ME</p>
        </Card.Title>
        <Card.Body>History from me</Card.Body>
      </Card>
      <div className="mt-4">
        <SkillsCard />
      </div>
    </Container>
  );
};

export default AboutMeCard;

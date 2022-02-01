import React from "react";
import NavBar from "./components/NavBar";
import PresentationCard from "./components/PresentationCard";
import { Container } from "react-bootstrap";
import AboutMeCard from "./components/AboutMeCard";

const Inicio = () => {
  return (
    <>
      <NavBar />
      <div className=" container-fluid">
        <Container className="d-flex">
          <PresentationCard />
          <AboutMeCard />
        </Container>
      </div>
    </>
  );
};
export default Inicio;

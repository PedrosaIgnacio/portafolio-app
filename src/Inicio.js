import React from "react";
import NavBar from "./components/Navbar/NavBar";
import PresentationCard from "./components/PresentationCard/PresentationCard";
import { Container } from "react-bootstrap";
import AboutMeCard from "./components/AboutMeCard/AboutMeCard";
import "./index.css";
const Inicio = () => {
  return (
    <div className="cont">
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex">
          <PresentationCard />
          <AboutMeCard />
        </Container>
      </div>
    </div>
  );
};
export default Inicio;

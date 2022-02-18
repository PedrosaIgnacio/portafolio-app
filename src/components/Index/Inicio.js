import React from "react";
import NavBar from "../Navbar/NavBar";
import PresentationCard from "./PresentationCard/PresentationCard";
import AboutMeCard from "./AboutMeCard/AboutMeCard";
import SkillsCard from "./Skills/SkillsCard";
import LocationCard from "./Location/LocationCard";
import { Container } from "react-bootstrap";
import "./inicio.css";
const Inicio = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex flex-wrap">
          <div className="col">
            <PresentationCard />
          </div>
          <div className="col">
            <AboutMeCard />
            <LocationCard />
          </div>
          <div className="row">
            <div className="col">
              <SkillsCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Inicio;

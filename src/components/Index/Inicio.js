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
          <div className="d-flex flex-wrap">
            <div className="col-md-4 col-sm-12">
              <PresentationCard />
            </div>
            <div className="col-md-8 col-sm-12">
              <AboutMeCard />
              <LocationCard />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <SkillsCard />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Inicio;

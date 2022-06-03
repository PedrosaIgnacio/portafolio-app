import React from "react";
import NavBar from "../Navbar/NavBar";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Container, Row } from "react-bootstrap";

import licRamirez from "../../img/licRamirez.png";
import taskApp from "../../img/taskApp.png";
import giffApp from "../../img/giffApp.png";
import heroesApp from "../../img/heroesApp.png";
const Projects = () => {
  const ProjectList = [
    {
      name: "Task App",
      url: "https://task-app-one-rho.vercel.app/",
      img: taskApp,
    },
    {
      name: "Gif Expert App",
      url: "https://gif-expert-app-ivory.vercel.app/",
      img: giffApp,
    },
    {
      name: "Heroes App",
      url: "https://heroes-app-iota-ten.vercel.app/",
      img: heroesApp,
    },
    {
      name: "Lic Ramirez Maria Lorena",
      url: "https://lic-ramirez.vercel.app/",
      img: licRamirez,
    },
  ];

  return (
    <>
      <NavBar />

      <div className="container-fluid my-3 ">
        <Container>
          <Row className="g-4">
            {ProjectList.map((p) => {
              return <ProjectCard name={p.name} url={p.url} img={p.img} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;

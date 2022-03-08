import React from "react";
import NavBar from "../Navbar/NavBar";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Container } from "react-bootstrap";
const Projects = () => {
  const ProjectList = [
    {
      name: "Task App",
      url: "https://task-app-one-rho.vercel.app/",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container>
          {ProjectList.map((p) => {
            return <ProjectCard name={p.name} url={p.url} />;
          })}
        </Container>
      </div>
    </>
  );
};

export default Projects;

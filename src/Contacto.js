import React from "react";
import { Container } from "react-bootstrap";
import MailCard from "./components/MailCard";
import NavBar from "./components/NavBar";
const Contacto = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex justify-content-center">
          <MailCard />
        </Container>
      </div>
    </>
  );
};
export default Contacto;

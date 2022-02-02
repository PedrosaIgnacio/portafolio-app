import React from "react";
import { Container } from "react-bootstrap";
import MailCard from "./components/MailCard";
import NavBar from "./components/NavBar";
import Background from "./img/bg.jpg";

const Contacto = () => {
  // const background = {
  //   backgroundImage: `url(${Background})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex justify-content-center">
          <MailCard />
        </Container>
      </div>
    </div>
  );
};
export default Contacto;

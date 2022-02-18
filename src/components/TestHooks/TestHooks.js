import React from "react";
import NavBar from "../Navbar/NavBar";
import CounterApp from "./CounterApp/CounterApp";
import { Container } from "react-bootstrap";
import InputSearch from "./InputSearch/InputSearch";
import FormikForm from "./TestFormik/FormikForm";
const TestHooks = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex flex-wrap">
          <div className="row">
            <div className="col">
              <CounterApp />
            </div>
            <div className="col">
              <InputSearch />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <FormikForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TestHooks;

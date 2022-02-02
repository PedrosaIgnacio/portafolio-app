import React from "react";
import NavBar from "./components/NavBar";

const TestHooks = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid text-center mt-4">
        <p className="lead" style={{ fontSize: "10vh" }}>
          COMING SOON
        </p>
        <p className="lead" style={{ fontSize: "10vh" }}>
          INSTAAAA
        </p>

        <div className="row justify-content-center d-flex flex-wrap">
          <div className="col-auto">
            <a
              href="#"
              className="border-0 shadow form-control text-decoration-none"
            >
              Hola que tal texto largo
            </a>
          </div>
          <div className="col-auto">
            <a
              href="#"
              className="border-0 shadow form-control text-decoration-none"
            >
              Chau que tal texto largo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestHooks;

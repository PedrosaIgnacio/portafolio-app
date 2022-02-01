import React from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

const Inicio = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex mt-4">
        <Cards />
      </div>
    </>
  );
};
export default Inicio;

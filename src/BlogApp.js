import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto";
import TestHooks from "./TestHooks";

const BlogApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/test-hooks" element={<TestHooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default BlogApp;

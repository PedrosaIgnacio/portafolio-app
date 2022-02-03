import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto";
import TestHooks from "./TestHooks";
import { Toaster } from "react-hot-toast";

const BlogApp = () => {
  return (
    <div>
      <Toaster position="bottom-right" className="mb-4" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/test-hooks" element={<TestHooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default BlogApp;

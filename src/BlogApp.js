import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Index/Inicio";
import Contacto from "./components/Contact/Contacto";
import TestHooks from "./components/TestHooks/TestHooks";
import { Toaster } from "react-hot-toast";
import "./index.css";
import Projects from "./components/Projects/Projects";

const BlogApp = () => {
  return (
    <div>
      <Toaster position="bottom-right" className="mb-4" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contact" element={<Contacto />} />
          <Route exact path="/extra" element={<TestHooks />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default BlogApp;

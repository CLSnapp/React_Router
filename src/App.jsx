import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/red";
import Blue from "./components/blue";
import Home from "./components/home";
import Nav from "./components/nav";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Nav />
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

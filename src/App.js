import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import "./App.css";

function App() {

  return (
    <>

      <Router>
        <ResponsiveAppBar />
        <div style={{ marginTop: `${window.innerHeight * 0.11}px` }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Faq" element={<Faq />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </>

  );
}
export default App;
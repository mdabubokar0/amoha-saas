import React from "react";
import Home from "../Homes/Home/Home";
import Diseases from "../Homes/Diseases/Diseases";
import Ai from "../Homes/Ai/Ai";
import Train from "../Homes/Train/Train";
import Feedback from "../Homes/Feedback/Feedback";
import Footer from "../Footer/Footer";
import Contact from "../Homes/Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Diseases />
      <Ai />
      <Train />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";
import BookDemo from "../BookDemo/BookDemo";
import Footer from "../Footer/Footer";
import { Helmet, HelmetData } from "react-helmet-async";

const DemoPage = () => {
  const helmetData = new HelmetData({});
  return (
    <div className="demopage">
      <Helmet helmetData={helmetData}>
        <title>Amoha.ai - Book a Demo</title>
        <link rel="canonical" href="https://amoha.ai/demopage" />
      </Helmet>
      <BookDemo />
      <Footer />
    </div>
  );
};

export default DemoPage;

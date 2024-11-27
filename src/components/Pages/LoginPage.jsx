import React from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

import { Helmet, HelmetData } from "react-helmet-async";

const LoginPage = () => {
  const helmetData = new HelmetData({});
  return (
    <div className="loginpage">
      <Helmet helmetData={helmetData}>
        <title>Amoha.ai - Login</title>
        <link rel="canonical" href="https://amoha.ai/loginpage" />
      </Helmet>
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;

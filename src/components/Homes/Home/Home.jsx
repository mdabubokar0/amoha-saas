import React from "react";
import Do from "./Do";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Helmet, HelmetData } from "react-helmet-async";

const Home = () => {
  const helmetData = new HelmetData({});
  return (
    <div id="home" className="mt-9 px-[5px] md:px-[10px] lg:px-9">
      <Helmet helmetData={helmetData}>
        <title>Amoha.ai - Home</title>
        <link rel="canonical" href="https://amoha.ai/" />
      </Helmet>
      <div className="m-auto px-3 pt-5 md:pt-11 md:px-5 lg:px-9 xl:px-28 2xl:w-[1366px] bg-primary rounded-[40px] py-[100px] ">
        <motion.div
          className="flex justify-between items-center"
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <div>
            <img
              src="img/logo.gif"
              alt="logo"
              className="w-[95px] md:w-[144px] h-[40px] md:h-[54px]"
            />
          </div>
          <div className="text-white font-semibold flex items-center gap-2 lg:gap-4 text-xs sm:text-sm lg:text-base">
            <Link
              to="/loginpage"
              className="font-heading cursor-pointer w-[60px] h-[40px] md:h-[54px] md:w-[140px] lg:w-[180px] flex items-center justify-center rounded-lg hover:border-bgColor hover:border-[1px] transition-all"
            >
              Login
            </Link>
            <Link
              to="/demopage"
              className="font-heading cursor-pointer w-[100px] h-[40px] md:h-[54px] md:w-[140px] lg:w-[180px] border-white border-[1px] rounded-lg flex items-center justify-center hover:bg-bgColor hover:text-primary transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
        <div className="flex flex-col justify-center md:justify-between md:flex-row">
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <div className="mt-[30px] lg:mt-28">
              <div className="text-white font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-start ">
                Experience The Future Of <br />
                <div className="bg-white inline-block text-primary">
                  <Typewriter
                    options={{
                      strings: [
                        "Diverse Ophthalmology!",
                        "Ocular Health!",
                        "Simplified Eyecare!",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm lg:text-base text-start">
              Early Detection | Advanced Insights | Cost-Efficient
            </div>
            <div className="text-sm lg:text-lg mt-[30px] xl:mt-[90px] text-white font-heading font-medium text-start">
              AI for Eye scans
            </div>
            <div className="flex justify-start mt-5">
              <Button title="Let's speak" />
            </div>
          </motion.div>
          <motion.div
            className="m-auto w-full lg:w-[40%]"
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <img
              src="img/eye.gif"
              alt="eyeImage"
              className="w-[283px] h-[283px] my-12 m-auto lg:h-[250px] lg:w-[250px] xl:h-[400px] xl:w-[400px] lg:mt-[80px]"
            />
          </motion.div>
        </div>
      </div>
      <div className="p-[20px] md:p-[35px] xl:p-[50px] mt-[-100px] lg:mt-[-50px] xl:mt-[-80px] 2xl:mt-[-100px] mx-11 2xl:w-[1280px] 2xl:m-auto rounded-3xl lg:p-[60] bg-[#F9FBFF] lg:rounded-5xl shadow border-[1px] border-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 0.3 }}
        >
          <h1 className="text-3xl text-center lg:text-4xl xl:text-5xl text-font1 font-heading font-semibold">
            What we do?
          </h1>
          <p className="text-font1 text-center mt-2 w-full lg:w-[80%] m-auto text-sm lg:text-base">
            Amoha.ai is an innovative Software-as-a-Service (SaaS) MedTech
            platform designed to revolutionize the early detection and
            management of various ocular conditions such as diabetic
            retinopathy, glaucoma, AMD, cataracts, etc., which, if unchecked,
            can lead to significant vision loss or even blindness.
          </p>
        </motion.div>
        <div className="xl:mt-12 flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start w-full lg:w-[80%] m-auto justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5 }}
            >
              <Do
                icon="img/homeIcon1.gif"
                title="AI-Enabled Accessibility"
                detail="We leverage AI to rapidly process retinal images and scans, significantly reducing waiting times for diagnosis results. Through our technology, we provide high-quality ocular care, irrespective of geographical boundaries and constraints."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            >
              <Do
                icon="img/homeIcon2.gif"
                title="Ophthalmic Empowerment Hub"
                detail="We facilitate informed decision-making, empowering patients, ophthalmologists, and eyecare professionals to manage ocular health proactively."
              />
            </motion.div>
          </div>
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between mt-4 xl:mt-10 w-full lg:w-[80%] m-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5 }}
            >
              <Do
                icon="img/homeIcon3.gif"
                title="Diagnosis and Monitoring"
                detail="Our platform offers wide-ranging ocular assessments based on continuous data analysis, which promotes timely health interventions and meticulous scrutiny of potential eye health threats."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            >
              <Do
                icon="img/homeIcon4.gif"
                title="Device Agnostic Approach"
                detail="Our device-agnostic approach ensures compatibility with various eye imaging devices, enabling seamless integration in diverse clinical settings. This flexibility allows eye care professionals to use the platform with their existing diagnostic equipment, thus eliminating the need for costly upgrades or proprietary hardware."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

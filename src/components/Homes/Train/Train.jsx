import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Train = () => {
  const icon = [
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
    { arrow: "img/arrow3.svg", alt: "arrow" },
  ];

  return (
    <div id="train" className="px-[10px] mt-[50px] lg:px-9 lg:mt-[100px]">
      <div className="py-[135px] text-center m-auto bg-[#F3F3F6] rounded-7xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <div className="text-font1 text-3xl md:text-4xl lg:text-5xl font-heading font-semibold">
            How we train our SaaS?
          </div>
        </motion.div>

        <motion.div
          className="mt-[40px] w-full m-auto justify-evenly flex flex-col gap-[20px] xl:gap-0 xl:flex-row items-center xl:items-start relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          {/* Marquee for large screens */}
          <div className="absolute hidden xl:flex w-full justify-between mt-5">
            <Marquee
              direction="right"
              speed={100}
              gradient={false}
              pauseOnHover={true}
            >
              {icon.map((ic, index) => (
                <img
                  key={index}
                  src={ic.arrow}
                  alt={ic.alt}
                  className="w-[30px] h-[30px] mx-12"
                />
              ))}
            </Marquee>
          </div>

          {/* Marquee for small screens */}
          <div className="absolute flex xl:hidden justify-between mt-5">
            <Marquee
              className="w-[100%]"
              direction="down"
              speed={100}
              gradient={false}
              pauseOnHover={true}
            >
              {icon.map((ic, index) => (
                <img
                  key={index}
                  src={ic.arrow}
                  alt={ic.alt}
                  className="w-[30px] h-30px] mx-12 rotate-90"
                />
              ))}
            </Marquee>
          </div>
          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas1.png"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Data Repository (Fundus Images/Scans)</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas2.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>
              Data labelling (Annotate retinal images/scans with specific
              features)
            </p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas4.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Image preprocessing</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas3.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Feature Extraction such as exudates, haemorrhages, etc.</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas5.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>UNET With multi output layer</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas6.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model Traning and testing</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas7.gif"
              alt="saasImg"
              className="w-[74px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model Deployment</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas8.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Retraining and Retesting</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas9.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model inference</p>
          </div>

          <div className="z-10 text-font1 text-sm flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas10.png"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Output</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Train;

import React from "react";
import diseasesData from "./diseasesData.json";
import { motion } from "framer-motion";

const Diseases = () => {
  return (
    <div id="diseases" className="mt-[70px] px-[10px] lg:px-9">
      <div className="m-auto 2xl:w-[1366px]">
        <motion.div
          className="mt-[50px] lg:mt-[100px]"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-font1 text-center md:w-[70%] m-auto font-heading font-bold">
            Ever imagined the world through the lens of these conditions?
          </div>
        </motion.div>
        <div className="mt-[100px]">
          {diseasesData.map((d, index) => (
            <div
              className={`flex flex-col-reverse gap-5 md:flex-row items-center justify-between w-auto m-auto text-font1 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              key={d.id}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
              >
                <iframe
                  className="mb-5 rounded-2xl w-full h-[275px] lg:h-[375px]"
                  src={d.video}
                  title="@AmohaAI"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-bold">{d.title}</div>
                <p className="mt-[25px] text-sm lg:text-base">{d.detail}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diseases;

import React from "react";
import feedback from "./feedbackData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <div id="feedback">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <h1 className="mt-[50px] lg:mt-[74px] text-3xl md:text-4xl lg:text-5xl text-font1 text-center font-semibold">
          What do the SME's have to say about us?
        </h1>
      </motion.div>
      <div className="xl:w-[920px] m-auto">
        <Swiper
          className="px-9 mt-[50px]"
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={50}
          slidesPerView={2}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {feedback.map((f, index) => (
            <SwiperSlide className="w-full m-auto" key={index}>
              <div className="flex flex-col justify-between gap-[20px] w-auto min-h-[360px] lg:w-[420px] lg:min-h-[530px] bg-white rounded-2xl p-5 lg:p-10">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
                >
                  <div className="text-sm lg:text-base text-font1 font-medium">
                    {f.feedback}
                  </div>
                </motion.div>
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.5 }}
                  >
                    <img
                      src={f.profile}
                      alt="profileImg"
                      className="w-[40px] lg:w-[60px]"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-between"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, ease: "linear", duration: 0.5 }}
                  >
                    <h2 className="text-sm lg:text-base text-font1 font-bold">
                      {f.name}
                    </h2>
                    <h3 className="text-font2 text-sm lg:text-sm font-medium">
                      {f.country}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        className="flex items-center gap-[26px] justify-center mt-[20px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
      >
        <img
          src="img/arrow.png"
          alt="arrowImage"
          className="-rotate-180 w-[30px] h-[30px] prev cursor-pointer"
        />
        <img
          src="img/arrow.png"
          alt="arrowImage"
          className="w-[30px] h-[30px] next cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Feedback;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7tgyrxh",
        "template_9s16rla",
        form.current,
        "X2BgLpJsY18HGn10P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully send");
          document.getElementById("name").value = "";
          document.getElementById("profession").value = "";
          document.getElementById("company").value = "";
          document.getElementById("email").value = "";
          document.getElementById("city").value = "";
          document.getElementById("state").value = "";
          document.getElementById("country").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="w-auto mt-[70px] xl:w-[1000px] m-auto px-9">
      <div>
        <motion.div
          className="text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-font1 font-semibold">
            Connect with us
          </h1>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <p className="text-sm lg:text-base text-font2 font-medium">
            No need to knock – just drop your thoughts in our inbox for a
            caffeine-free chat.
          </p>
        </motion.div>
        <div className="mt-[70px] lg:mt-[110px] lg:items-center xl:items-start flex flex-col gap-[25px] justify-between xl:flex-row">
          <motion.div
            className="flex flex-col gap-[25px] xl:gap-[55px]"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
          >
            <div className="flex flex-col lg:items-center xl:items-start gap-[10px] text-sm text-font1 ">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-font2 w-[24px] h-[24px]"
              />
              <div className="text-font2 font-semibold">Address</div>
              <div className="text-font1 font-semibold">New Delhi, India</div>
            </div>
            <div className="flex flex-col lg:items-center xl:items-start gap-[10px] text-sm text-font1">
              <img
                src="img/icon2.png"
                alt="icon"
                className="text-font2 w-[24px] h-[24px]"
              />
              <div className="text-font2 font-semibold">Email</div>
              <div className="text-font1 font-semibold">inquiries@amoha.ai</div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.5 }}
            className="text-font2 text-sm flex flex-col gap-[15px]"
          >
            <label className="text-sm font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full lg:w-[350px] h-[48px] bg-inputBg px-[15px] rounded-lg focus:outline-none font-medium"
            />
            <label className="text-sm font-semibold">Profession</label>
            <input
              type="text"
              id="profession"
              name="user_profession"
              required
              placeholder="Enter your profession"
              className="w-full lg:w-[350px] h-[48px] bg-inputBg px-[15px] rounded-lg focus:outline-none font-medium"
            />
            <label className="text-sm font-semibold">
              Organization/Company/Workplace
            </label>
            <input
              type="text"
              id="company"
              name="user_company"
              required
              placeholder="Enter your Organization/Company/Workplace"
              className="w-full lg:w-[350px] h-[48px] bg-inputBg px-[15px] rounded-lg focus:outline-none font-medium"
            />
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full lg:w-[350px] h-[48px] bg-inputBg px-[15px] rounded-lg focus:outline-none font-medium"
            />
            <div className="flex items-center justify-between w-full lg:w-[350px] ">
              <div className="flex flex-col w-[28%]">
                <label className="text-sm font-semibold">City</label>
                <input
                  type="text"
                  id="city"
                  name="user_city"
                  required
                  placeholder="Your city"
                  className="h-[48px] mt-[15px] bg-inputBg px-[15px] rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[28%]">
                <label className="text-sm font-semibold">State/Province</label>
                <input
                  type="text"
                  id="state"
                  name="user_state"
                  required
                  placeholder="Your state"
                  className="h-[48px] mt-[15px] bg-inputBg px-3 md:px-[15px] rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[38%]">
                <label className="text-sm font-semibold">Country</label>
                <input
                  type="text"
                  id="country"
                  name="user_country"
                  required
                  placeholder="Your country"
                  className="h-[48px] mt-[15px] bg-inputBg px-[15px] rounded-lg focus:outline-none"
                />
              </div>
            </div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full text-black lg:w-[350px] h-[120px] bg-inputBg px-[15px] rounded-lg p-3 focus:outline-none"
              placeholder="Your message"
            />
            <input
              type="submit"
              value="Send"
              className="bg-primary text-base w-[100px] h-[48px] text-white font-medium rounded-5xl cursor-pointer hover:bg-buttonHover transition-all"
            />
          </motion.form>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className="text-font2 mb-2 text-base mt-5 md:mt-0 r"
        >
          Follow us :
        </motion.h1>
        <motion.div
          className="flex gap-5 my-[10px] xl:my-0 lg:justify-start xl:place-content-start"
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, ease: "linear", duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/company/amoha-ai/" target="_blank">
            <img
              src="img/linkedin.svg"
              alt="socialIcon"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </a>
          <a href="https://twitter.com/AmohaAi" target="_blank">
            <img
              src="img/twitter.svg"
              alt="socialIcon"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

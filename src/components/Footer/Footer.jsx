import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7tgyrxh",
        "template_m41upyo",
        form.current,
        "X2BgLpJsY18HGn10P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully send");
          document.getElementById("subscriber").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="footer" className="bg-black mt-[50px] xl:mt-[125px]">
      <div className="w-full 2xl:w-[1366px] m-auto pt-[80px] px-9">
        <div className="flex flex-col justify-between xl:flex-row gap-[50px]">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <img
              src="img/logo-footer.gif"
              alt="footerLogo"
              className="w-[110px] h-[40px]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[25px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, ease: "linear", duration: 0.5 }}
          >
            <div className="text-base font-medium text-white">
              Subscribe to our newsletter
            </div>
            <p className="text-sm w-[90%] text-white">
              Stay informed about the latest features, product enhancements,
              news, and more.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              autoComplete="off"
              className="r h-[48px] w-full border-white border-[2px] rounded-5xl focus:outline-none text-sm text-white flex items-center"
            >
              <input
                type="email"
                id="subscriber"
                name="subscriber"
                placeholder="Enter your email"
                className="bg-black h-full mx-[16px] rounded-lg w-full focus:outline-none text-base"
              />
              <button
                type="submit"
                className="w-[32px] h-[32px] mr-[8px] cursor-pointer"
              >
                <img src="img/footer-arrow.png" alt="footerArrow" />
              </button>
            </form>
          </motion.div>
        </div>
        <div className="mt-[100px] w-full">
          <motion.div
            className="h-[1px] w-full bg-white m-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, ease: "linear", duration: 0.8 }}
          />
          <motion.div
            className="flex lg:flex-row justify-between py-[20px]"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.2 }}
          >
            <div className="text-xs text-font2 font-semibold">
              Copyright © 2024 amoha.ai
            </div>
            <div className="text-xs text-font2 font-semibold">
              Privacy Policy
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

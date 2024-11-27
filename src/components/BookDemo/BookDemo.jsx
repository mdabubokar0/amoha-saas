import React, { useRef } from "react";
import Header from "../Input/Header";
import InputField from "../Input/InputField";
import Button from "../Input/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookPage = () => {
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
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("user_number").value = "";
          document.getElementById("user_profession").value = "";
          document.getElementById("user_title").value = "";
          document.getElementById("user_company").value = "";
          document.getElementById("user_practice").value = "";
          document.getElementById("user_specialization").value = "";
          document.getElementById("user_country").value = "";
          document.getElementById("user_state").value = "";
          document.getElementById("user_city").value = "";
          document.getElementById("user_hear").value = "";
          document.getElementById("user_yes").value = "";
          document.getElementById("user_no").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="bookpage">
      <div className="h-full bg-bg1">
        <div className="m-auto px-5 pt-5 md:pt-11 lg:px-9 xl:px-28 2xl:w-[1366px]">
          <motion.div
            className="flex justify-between items-center"
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <Link to="/">
              <img
                src="img/logo.gif"
                alt="logo"
                className="w-[95px] md:w-[144px] h-[40px] md:h-[54px]"
              />
            </Link>
            <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">
              <Link
                to="/loginpage"
                className="font-heading cursor-pointer w-[60px] h-[40px] md:h-[54px] md:w-[140px] lg:w-[180px] flex items-center justify-center rounded-lg hover:border-bgColor hover:border-[1px] transition-all"
              >
                Login
              </Link>
            </div>
          </motion.div>
          <div className="m-auto w-full xl:w-[1100px]">
            <div className="text-center text-white pt-3">
              <p className="text-xl md:text-2xl font-medium">
                Welcome to Amoha.ai's Eye Specialist Information Form!
              </p>
              <p className="text-sm md:text-base mb-2">
                Your valuable input enables us to customize our cutting-edge eye
                health technology platform to best serve you.
              </p>
            </div>
            <div className="bg-bgColor shadow-md rounded-3xl p-[30px]">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col md:flex-row items-start justify-between">
                  <div className="w-full md:w-[30%]">
                    <Header header="Personal Details" />
                    <label className="text-font2 text-sm font-semibold">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="e.g., John Doe"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                    <label className="text-font2 text-sm font-semibold">
                      Work Email:
                    </label>
                    <input
                      type="text"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="e.g., john.doe@example.com"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                    <InputField
                      types="text"
                      text="Phone Number:"
                      id="user_number"
                      name="user_number"
                      placeholder="e.g., +1-555-555-1234"
                    />
                  </div>
                  <div className="w-full md:w-[30%]">
                    <Header header="Professional Details" />
                    <label className="text-font2 text-sm font-semibold">
                      Profession:
                    </label>
                    <input
                      type="text"
                      id="user_profession"
                      name="user_profession"
                      required
                      placeholder="e.g., Ophthalmologist"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                    <label className="text-font2 text-sm font-semibold">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="user_title"
                      name="user_title"
                      required
                      placeholder="e.g., MD, PhD"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                    <label className="text-font2 text-sm font-semibold">
                      Organization/Company:
                    </label>
                    <input
                      type="text"
                      id="user_company"
                      name="user_company"
                      required
                      placeholder="e.g., ABC Eye Clinic"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                  </div>
                  <div className="w-full md:w-[30%]">
                    <Header header="Experience" />
                    <label className="text-font2 text-sm font-semibold">
                      Years of Practice:
                    </label>
                    <input
                      type="text"
                      id="user_practice"
                      name="user_practice"
                      required
                      placeholder="e.g., 10"
                      className="w-full h-[48px] bg-inputBg px-4 rounded-lg text-font2 text-sm focus:outline-none font-medium"
                    />
                    <InputField
                      types="text"
                      text="Specialization (if any):"
                      id="user_specialization"
                      name="user_specialization"
                      placeholder="e.g., Glaucoma, Cataract Surgery"
                    />
                  </div>
                </div>
                <div className="w-full mt-4">
                  <Header header="Location" />
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-[30%]">
                      <InputField
                        types="text"
                        text="Country:"
                        id="user_country"
                        name="user_country"
                        placeholder="e.g., United States"
                      />
                    </div>
                    <div className="w-full md:w-[30%]">
                      <InputField
                        types="text"
                        text="State/Province:"
                        id="user_state"
                        name="user_state"
                        placeholder="e.g., California"
                      />
                    </div>
                    <div className="w-full md:w-[30%]">
                      <InputField
                        types="text"
                        text="City:"
                        id="user_city"
                        name="user_city"
                        placeholder="e.g., Los Angeles"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4">
                  <Header header="Additional Information" />
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-[48%]">
                      <div>
                        <InputField
                          types="text"
                          text="How did you hear about Amoha.ai?"
                          id="user_hear"
                          name="user_hear"
                          placeholder="e.g., Colleague, Conference, Social Media"
                        />
                      </div>
                      <div>
                        <label className="text-font2 text-sm font-semibold">
                          Would you like to receive product updates and news
                          from Amoha.ai?
                        </label>
                        <div className="w-full flex justify-between text-sm text-font2 font-medium">
                          <div className="w-[48%] h-[48px] bg-[#F4F5F6] rounded-xl">
                            <input
                              type="radio"
                              name="user_decision"
                              id="user_yes"
                              value="Yes"
                              defaultChecked
                            />
                            <label
                              htmlFor="user_yes"
                              className="h-full w-full flex items-center justify-center rounded-xl cursor-pointer font-medium"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="w-[48%] h-[48px] bg-[#F4F5F6] rounded-lg">
                            <input
                              type="radio"
                              name="user_decision"
                              id="user_no"
                              value="No"
                            />
                            <label
                              htmlFor="user_no"
                              className="h-full w-full flex items-center justify-center rounded-lg cursor-pointer"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-[48%]">
                      <label className="text-font2 text-sm font-semibold">
                        Comments/Questions:
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Feel free to share any additional comments or questions."
                        className="w-full h-[115px] p-4 bg-[#F4F5F6] px-4 rounded-lg text-font2 text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <input type="checkbox" required className="cursor-pointer" />
                  <p className="text-font2 text-sm font-medium">
                    I agree to Amoha.ai’s Privacy Policy
                  </p>
                </div>
                <Button title="Submit" />
                <p className="text-font2 text-sm mt-1 font-medium">
                  Disclaimer: “Rest assured, at Amoha.ai, we prioritize your
                  data privacy. Our commitment to compliance with global
                  standards such as GDPR, CCPA, and other applicable data
                  privacy regulations underscores our dedication to protecting
                  your information. Your trust and confidentiality are paramount
                  to us.”{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Input from "../Utils/Input";
import Password from "../Utils/Password";

import Button from "../Utils/Button";
import { useLogin } from "../Hooks/useLogin";

const Login = () => {
  const SITE_URL = import.meta.env.VITE_SITE_URL;
  // const mutation = useLogin();
  const { mutate, isLoading, isError, isSuccess, error } = useLogin();
  console.log(isLoading, isError, isSuccess, error);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const validateEmail = (value) => {
    const trimmedValue = value.trim();
    const emailPattern = /^[A-Za-z0-9+._]+@[A-Za-z0-9]+\.[A-Za-z]{2}/i;
    return (
      emailPattern.test(trimmedValue) || "Please enter a valid email address."
    );
  };

  const onSubmit = async (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div id="login">
      <div className="h-[90vh] bg-bg1">
        <div className="m-auto px-5 pt-5 md:pt-11 lg:px-9 xl:px-28 2xl:w-[1366px] py-[100px]">
          <motion.div
            className="flex justify-between items-center"
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <Link to={`${SITE_URL}`}>
              <img
                src="img/logo.gif"
                alt="logo"
                className="w-[95px] md:w-[144px] h-[40px] md:h-[54px]"
              />
            </Link>
            <div className="text-white font-semibold flex items-center gap-2 lg:gap-[20px] text-xs sm:text-sm lg:text-base xl:pr-5">
              <a
                href={`${SITE_URL}/demopage`}
                // target="_blank"
                rel="noopener noreferrer"
                className="font-heading cursor-pointer w-[100px] h-[40px] md:h-[54px] md:w-[140px] lg:w-[180px] border-white border-[1px] rounded-lg flex items-center justify-center hover:bg-bgColor hover:text-primary transition-all"
              >
                Book a Demo
              </a>

              {/* <Link
                to="/demopage"
                className="font-heading cursor-pointer w-[100px] h-[40px] md:h-[54px] md:w-[140px] lg:w-[180px] border-white border-[1px] rounded-lg flex items-center justify-center hover:bg-bgColor hover:text-primary transition-all"
              >
                {" "}
                Book a Demo
              </Link> */}
            </div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[280px] md:w-[400px] xl:w-[350px] 2xl:w-[400px] m-auto bg-[#FAFAFA] shadow-md p-5 md:p-10 xl:p-5 2xl:p-10 xl:px-10 rounded-md">
            <h1 className="text-center text-3xl text-font1 font-semibold">
              Login
            </h1>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "linear", duration: 0.5 }}
              className="text-font2 text-sm flex flex-col gap-[15px]"
            >
              <Input
                className="flex flex-col"
                label="Email"
                errors={errors}
                type="email"
                id="email"
                name="email"
                placeholder="e.g., john.doe@example.com"
                {...register("email", {
                  required: "This field is required.",
                  validate: validateEmail,
                  onBlur: (e) => setValue("email", e.target.value.trim()),
                })}
              />

              <Password
                className="flex flex-col"
                label="Password"
                errors={errors}
                type="password"
                id="password"
                name="password"
                placeholder="e.g., ********"
                {...register("password", {
                  required: "This field is required.",
                  validate: (value) =>
                    value.trim() !== "" || "Field cannot be empty spaces.",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i,
                    message:
                      "Please enter at least minimum six characters, include at least one letter, one number and one special character.",
                  },

                  // minLength: {
                  //   value: 3,
                  //   message: "Please enter at least 3 characters.",
                  // },
                  onBlur: (e) => setValue("password", e.target.value.trim()),
                })}
              />
              <p className="text-font1 text-center text-sm font-medium">
                Forgot your password?
              </p>
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                text="Login"
                width="w-full"
                size="18px"
                rounded="xl"
                fontWeight="semibold"
              />
            </motion.form>

            <p className="my-4 xl:my-2 2xl:my-4 text-font1 text-center text-sm font-medium">
              New to our platform?
              <Link
                to="/demopage"
                className="text-primary cursor-pointer font-medium ps-1"
              >
                Get an account now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

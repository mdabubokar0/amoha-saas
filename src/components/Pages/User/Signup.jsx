import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://18.212.83.122:8000/api/register/", values)
      .then((res) => {
        console.log("Creation Successful");
        localStorage.setItem("token", res.data.token);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <img src="vite.svg" alt="logo" className="m-auto" />
      <form
        onSubmit={handleSubmit}
        className="border-[.5px] border-[#c4c4c4] rounded-2xl p-10 mt-3"
      >
        <div className="flex flex-col gap-1 mt-3">
          <label
            htmlFor="email"
            className="text-[12px] text-[#777E90] font-bold uppercase"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] w-[360px] h-[48px] rounded-[8px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label
            htmlFor="username"
            className="text-[12px] text-[#777E90] font-bold uppercase"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter username"
            required
            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] w-[360px] h-[48px] rounded-[8px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label
            htmlFor="password"
            className="text-[12px] text-[#777E90] font-bold uppercase"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] w-[360px] h-[48px] rounded-[8px] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full h-[48px] rounded-lg bg-[#3174C4] border-[#c4c4c4] border-[.5px] flex items-center justify-center text-md text-white hover:bg-white hover:text-black transition-all"
        >
          Sign Up
        </button>
        <p className="mt-5">
          Already have an account?
          <Link to="/login" className="text-[#3174C4]">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

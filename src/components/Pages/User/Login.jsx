import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
        localStorage.setItem("token", res.data.token);
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
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[12px] text-[#777E90] font-bold uppercase"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            required
            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] w-[372px] h-[48px] rounded-[8px] focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            placeholder="Enter password"
            required
            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] w-[372px] h-[48px] rounded-[8px] focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full h-[48px] rounded-lg bg-[#3174C4] border-[#c4c4c4] border-[.5px] flex items-center justify-center text-md text-white hover:bg-white hover:text-black transition-all"
        >
          Login
        </button>
        <p className="mt-5">
          Don't have an account?
          <Link to="/signup" className="text-[#3174C4]">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

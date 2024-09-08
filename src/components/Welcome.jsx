import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="flex items-center gap-5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div className="text-3xl flex flex-col items-center">
        <img src="vite.svg" alt="logo" className="w-[200px] h-[200px]" />
        <h1>Welcome to amoha.ai</h1>
      </div>
      <div className="flex gap-2">
        <Link
          to="/login"
          className="w-[180px] h-[48px] rounded-lg bg-[#3174C4] border-[#c4c4c4] border-[.5px] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <div>Login</div>
        </Link>
        <Link
          to="/signup"
          className="w-[180px] h-[48px] rounded-lg bg-[#3174C4] border-[#c4c4c4] border-[.5px] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <div>Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

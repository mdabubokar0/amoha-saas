import React, { useState } from "react";
import menuData from "./menuData.json";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-[70px] px-[5%] flex items-center justify-between border-b-[1px] bg-white border-b-[#D9D9D9] sticky top-0 z-50 gap-3">
      <div>
        <img src="/vite.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[55px] h-[55px] border-[1px] border-[#c4c4c4] rounded-[50px] flex items-center justify-center cursor-pointer">
          <img src="img/bell.png" alt="icon" className="w-[24px] h-[24px]" />
        </div>
        <div onClick={handleMenu} className="relative">
          <div className="flex items-center justify-between w-[55px] md:w-[220px] cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="img/profile.svg"
                alt="profile"
                className="rounded-[50px]"
              />
              <div className="hidden md:flex flex-col">
                <h2 className="text-[16px]">Anita K</h2>
                <h4 className="text-[12px] text-[#696969]">Opthalmologist</h4>
              </div>
            </div>
            <div className="hidden md:flex">
              <img src="img/dropdown.svg" alt="dropdown" />
            </div>
          </div>
          {menu && (
            <div className="absolute left-[100%] -translate-x-[100%] bg-white border-[.5px] border-[#c4c4c4] rounded-[20px] w-[200px] md:w-full p-5 flex flex-col gap-3 mt-1 text-[14px] shadow-lg">
              {menuData.map((m, i) => (
                <Link to={m.link} className="flex items-center gap-3 cursor-pointer">
                  <img src={m.icon} alt="icon" className="w-[20px] h-[20px]" />
                  {m.title}
                </Link>
              ))}
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="flex items-center gap-3 border-t-[.5px] border-t-[#c4c4c4] pt-3 cursor-pointer"
              >
                <img
                  src="img/logout.svg"
                  alt="logout"
                  className="w-[20px] h-[20px]"
                />
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

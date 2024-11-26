import React, { useEffect, useState } from "react";
import menuData from "./menuData.json";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://18.212.83.122:8000/api/user/details/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => setName(res.data.user.name))
        .catch((err) => console.log(err));
    }
  }, [token]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[70px] px-[5%] flex items-center justify-between border-b-[1px] bg-white border-b-[#D9D9D9] sticky top-0 z-50 gap-3">
      <div>
        <img src="/vite.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[55px] h-[55px] border-[1px] border-[#c4c4c4] rounded-[50px] flex items-center justify-center cursor-pointer">
          <img
            src="img/bell.png"
            alt="Notifications"
            className="w-[24px] h-[24px]"
          />
        </div>
        <div onClick={handleMenu} className="relative">
          <div className="flex items-center justify-between w-[55px] md:w-[220px] cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="img/profile.svg"
                alt="Profile"
                className="rounded-[50px]"
              />
              <div className="hidden md:flex flex-col">
                <h2 className="text-[16px]">{name}</h2>
              </div>
            </div>
            <div className="hidden md:flex">
              <img src="img/dropdown.svg" alt="Dropdown" />
            </div>
          </div>
          {isMenuOpen && (
            <div className="absolute left-[100%] -translate-x-[100%] bg-white border-[.5px] border-[#c4c4c4] rounded-[20px] w-[200px] md:w-full p-5 flex flex-col gap-3 mt-1 text-[14px] shadow-lg">
              {menuData.map((m, i) => (
                <Link
                  key={i}
                  to={m.link}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={m.icon}
                    alt={m.title}
                    className="w-[20px] h-[20px]"
                  />
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
                  alt="Log Out"
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

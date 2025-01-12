import React, { useState } from "react";
import sidebar from "./sidebarData.json";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleLocation = (link) => {
    setActive(link);
  };

  return (
    <div className="hidden lg:flex flex-col gap-7 pt-[36px] w-[70px] lg:w-[300px] h border-r-[1px] border-r-[#D9D9D9] sticky top-[70px] bg-white">
      {sidebar.map((s, i) => (
        <Link
          key={i}
          to={s.link}
          onClick={() => handleLocation(s.link)}
          className={`flex items-center gap-3 cursor-pointer ${
            active === s.link
              ? "border-l-[3px] border-l-[#3174C4] pl-2 lg:pl-3"
              : ""
          }`}
        >
          <img className="w-[24px] h-[24px]" src={s.icon} alt="icon" />
          <h2 className="text-[14px] hidden lg:flex">{s.title}</h2>
        </Link>
      ))}
    </div>
  );
};

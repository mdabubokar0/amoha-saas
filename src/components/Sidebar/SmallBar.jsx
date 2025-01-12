import React, { useState } from "react";
import sidebar from "./sidebarData.json";
import { Link, useLocation } from "react-router-dom";

export const SmallBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleLocation = (link) => {
    setActive(link);
  };

  return (
    <div className="bg-white lg:hidden border-t-[.5px] border-t-[#c4c4c4] fixed bottom-0 flex items-center justify-evenly w-full h-[70px]">
      {sidebar.map((s, i) => (
        <Link
          key={i}
          to={s.link}
          onClick={() => handleLocation(s.link)}
          className={`w-full h-full flex items-center justify-center cursor-pointer ${
            active === s.link ? "border-t-[5px] border-t-[#3174C4]" : ""
          }`}
        >
          <img src={s.icon} alt="icon" />
        </Link>
      ))}
    </div>
  );
};

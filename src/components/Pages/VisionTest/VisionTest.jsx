import React from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";

export const VisionTest = () => {
  return (
    <div>
      <div className="px-[5%] flex justify-between bg">
        <Sidebar />
        <div className="w-full p-3 flex justify-between">
          <div>Coming Soon</div>
          <div className="w-[270px]"></div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

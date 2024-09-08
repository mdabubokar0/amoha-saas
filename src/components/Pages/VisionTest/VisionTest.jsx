import React, { useEffect } from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import { Navbar } from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const VisionTest = () => {
  
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="px-[5%] flex justify-between bg">
        <Sidebar />
        <div className="w-full p-3 flex justify-between">
          <div>Getting Live Soon</div>
          <div className="w-[270px]"></div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

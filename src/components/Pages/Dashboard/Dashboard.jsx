import React from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import ReportCard from "./ReportCard";
import reportInfo from "./reportInfo.json";
import patientData from "../PatientRecords/patientData.json";

export const Dashboard = () => {
  return (
    <div>
      <div className="px-[5%] flex justify-between bg mb-20 md:mb-0">
        <Sidebar />
        <div className="w-full p-3 flex flex-col lg:flex-row gap-4 lg:gap-3 justify-between">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-[160px] md:h-[180px] bg-[#3174C4] rounded-[20px] px-5 md:px-10 py-5 text-white flex justify-between">
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-[12px] md:text-[14px] font-normal">
                    Welcome
                  </h4>
                  <h1 className="text-[18px] md:text-[26px] font-semibold">
                    Dr. Anita K
                  </h1>
                  <h4 className="text-[12px] md:text-[14px] font-normal">
                    Opthalmologist, Eye Specialist
                  </h4>
                </div>
                <p className="text-[14px] md:text-[18px] font-normal">
                  You have 15 appointments left today
                </p>
              </div>
              <div className="hidden md:flex">
                <img src="img/logo.svg" alt="icon" />
              </div>
            </div>
            <div className="w-full h-full md:h-[220px] bg-white rounded-[20px] border-[.5px] border-[#c4c4c4] px-5 md:px-10 py-5 flex flex-col justify-between">
              <h3 className="text-[18px] font-medium">Weekly Reports</h3>
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                {reportInfo.map((r) => (
                  <div className="flex-1">
                    <ReportCard
                      color={r.color}
                      title={r.title}
                      count={r.count}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="px-5 md:px-10 py-5 md:py-8 bg-white rounded-[20px] border-[.5px] border-[#c4c4c4]">
              <h3 className="text-[18px] font-medium">Recent Patients</h3>
              <table className="w-full border-collapse rounded-[20px] mt-4 text">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th className="hide">Gender</th>
                  <th className="px-3 hide">Blood</th>
                  <th>Status</th>
                </tr>
                {patientData.map((p) => (
                  <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td className="hide">{p.gender}</td>
                    <td className="hide">{p.blood}</td>
                    <td>{p.status}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className="lg:w-[300px] flex-col flex md:flex-row lg:flex-col gap-4 md:gap-3 w-full">
            <div className="bg-white w-full md:w-1/2 lg:w-full h-[125px] border-[.5px] border-[#c4c4c4] p-5 rounded-[20px]">
              <h4 className="text-[14px] font-normal">Next appointment</h4>
              <h1 className="text-[26px] font-medium">11:30 AM (IST)</h1>
              <h4 className="text-[14px] font-normal">5/3/2024</h4>
            </div>
            <div className="bg-white w-full md:w-1/2 lg:w-full h-[125px] border-[.5px] border-[#c4c4c4] p-5 rounded-[20px]">
              <h4 className="text-[14px] font-normal">Total appointment</h4>
              <h1 className="text-[26px] font-medium">37</h1>
              <h4 className="text-[14px] font-normal">6/3/2024</h4>
            </div>
          </div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

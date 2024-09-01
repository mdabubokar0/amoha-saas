import React from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import patientData from "./patientData.json";

export const PatientRecords = () => {
  return (
    <div>
      <div className="pl-[5%] flex justify-between bg pb-20 md:pb-0">
        <Sidebar />
        <div className="w-full p-3">
          <div className="bg-white px-5 md:px-[80px] py-5 rounded-[20px] border-[.5px] border-[#c4c4f4]">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <h2 className="text-[28px] font-medium">Patient Records</h2>
              <div className="flex items-center gap-3 w-full md:w-[300px] h-[48px] rounded-[50px] bg-[#EFF3F4] px-5">
                <img src="img/search.svg" alt="search" />
                <input
                  type="search"
                  placeholder="Search Patient by ID"
                  className="focus:outline-none bg-[#EFF3F4] h-full w-full"
                />
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full border-collapse rounded-[20px] mt-4">
                <tr>
                  <th className="px-3">ID</th>
                  <th className="px-3">Name</th>
                  <th className="px-3">Gender</th>
                  <th className="px-3">Blood</th>
                  <th className="px-3">Status</th>
                  <th className="px-3">Details</th>
                  <th className="px-3">Delete</th>
                </tr>
                {patientData.map((p) => (
                  <tr>
                    <td className="px-3">{p.id}</td>
                    <td className="px-3">{p.name}</td>
                    <td className="px-3">{p.gender}</td>
                    <td className="px-3">{p.blood}</td>
                    <td className="px-3">{p.status}</td>
                    <td>
                      <img
                        src="img/details.svg"
                        alt="details"
                        className="m-auto cursor-pointer"
                      />
                    </td>
                    <td>
                      <img
                        src="img/delete.svg"
                        alt="delete"
                        className="m-auto cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

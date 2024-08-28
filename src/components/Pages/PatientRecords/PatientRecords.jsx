import React from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import patientData from "./patientData.json";

export const PatientRecords = () => {
  return (
    <div>
      <div className="pl-[5%] flex justify-between bg">
        <Sidebar />
        <div className="w-full p-3">
          <div className="bg-white px-[80px] py-5 rounded-[20px] border-[.5px] border-[#c4c4f4]">
            <div className="flex items-start justify-between">
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
            <table className="w-full border-collapse rounded-[20px] mt-4">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Blood</th>
                <th>Status</th>
                <th>Details</th>
                <th>Delete</th>
              </tr>
              {patientData.map((p) => (
                <tr>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.gender}</td>
                  <td>{p.blood}</td>
                  <td>{p.status}</td>
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
      <SmallBar />
    </div>
  );
};

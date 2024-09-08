import React, { useEffect, useState } from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const PatientProfile = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [patient, setPatient] = useState(null)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    else {
      axios.get(`http://18.212.83.122:8000/api/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => setPatient(res.data.data))
      .catch(err => console.log(err))
    }
  }, [id, navigate]);

  return (
    <div>
      <Navbar />
      <div className="pl-[5%] flex justify-between bg pb-20 md:pb-0">
        <Sidebar />
        <div className="w-full p-3">
          {patient ? (
            <div className="flex flex-col items-center justify-center gap-1">
              <img src="img/patientprofile.png" alt="profile" className="w-[55px] h-[55px] rounded-[50%]" />
              <h1>{patient.name}</h1>
              <p><strong>Email:</strong> {patient.email}</p>
              <p><strong>Date of Birth:</strong> {patient.dob}</p>
              <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Address:</strong> {patient.address}</p>
              <p><strong>Phone No:</strong> {patient.number}</p>
              <p><strong>Any existing ocular conditions or diseases:</strong> {patient.condition}</p>
              <p><strong>Other Condition or Disease:</strong> {patient.otherCondition}</p>
              <p><strong>History of eye surgeries or procedures:</strong> {patient.surgeryCondition}</p>
              <p><strong>Any other relevant medical conditions:</strong> {patient.relevantCondition}</p>
              <p><strong>Current medications:</strong> {patient.medication}</p>
              <p><strong>Family history of ocular diseases:</strong> {patient.familyHistory}</p>
              <p><strong>Any current symptoms related to vision or eye:</strong> {patient.symptoms}</p>
              <p><strong>Insurance Provider:</strong> {patient.insurance}</p>
              <p><strong>Policy Number:</strong> {patient.policyNumber}</p>
              <p><strong>Occupation:</strong> {patient.occupation}</p>
              <p><strong>Smoking or Alcohol Consumption:</strong> {patient.consumption}</p>
              <p><strong>Date of Last Eye Examination:</strong> {patient.lastExam}</p>
              <p><strong>Results of Any Previous Eye Tests (if available):</strong> {patient.results}</p>
              <p><strong>Name and Contact Information of Previous Eye Care Provider:</strong> {patient.providerInfo}</p>
              <p><strong>Any History of Vision Problems or Changes in Vision:</strong> {patient.visionProblem}</p>
              <p><strong>Prescription for Glasses or Contact Lenses (if applicable):</strong> {patient.contactLens}</p>
              <p><strong>Name and phone number of a person to contact in case of emergency:</strong> {patient.emergencyContact}</p>
              <Link to={`/patientedit/${id}`} className="w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white mt-3 flex items-center justify-center text-[18px]">Edit Profile</Link>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

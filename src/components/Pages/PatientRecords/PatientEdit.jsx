import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import PatientInput from "../OCD/PatientInput";
import axios from "axios";

export const PatientEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patientEdit, setPatientEdit] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      axios
        .get(`http://18.212.83.122:8000/api/customers/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setPatientEdit(res.data.data))
        .catch((err) => console.log(err));
    }
  }, [id, navigate]);

  const handleInputChange = (e) => {
    setPatientEdit({
      ...patientEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    axios
      .put(`http://18.212.83.122:8000/api/customers/${id}/update/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        patientEdit,
      })
      .then((res) => {
        setPatientEdit(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="pl-[5%] flex justify-between bg pb-20 md:pb-0">
        <Sidebar />
        <div className="w-full p-3 flex items-center justify-center mb-20 md:mb-0">
          <div className="w-[340px] md:w-[800px] rounded-[20px] border-[.5px] border-[#c4c4c4] bg-white p-5 md:p-10 relative">
            <form onSubmit={handleUpdate}>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-1">
                General Information
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={patientEdit.name}
                    onChange={handleInputChange}
                    placeholder="Enter Patient Name"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    DOB/AGE:
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={patientEdit.dob}
                    onChange={handleInputChange}
                    placeholder="Enter Patient DOB/AGE"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Blood Group
                  </label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={patientEdit.bloodGroup}
                    onChange={handleInputChange}
                    placeholder="Enter Patient Blood Group"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={patientEdit.gender}
                    onChange={handleInputChange}
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  >
                    <option>Select Patient Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer Not To Say">Prefer Not to Say</option>
                  </select>
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Contact Information
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={patientEdit.address}
                    onChange={handleInputChange}
                    placeholder="Enter Patient Address"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={patientEdit.number}
                    onChange={handleInputChange}
                    placeholder="Enter Patient Phone No."
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={patientEdit.email}
                    onChange={handleInputChange}
                    placeholder="Enter Patient Email"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Medical History
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Any existing ocular conditions or diseases
                  </label>
                  <select
                    value={patientEdit.condition}
                    onChange={handleInputChange}
                    name="condition"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  >
                    <option>Select Condition or Disease</option>
                    <option value="Diabetic">Diabetic Retinopathy</option>
                    <option value="AMD">Macular Degeneration/AMD</option>
                    <option value="Edema">Macular Edema</option>
                    <option value="Cataract">Cataract</option>
                    <option value="Glaucoma">Glaucoma</option>
                    <option value="Anyother">Any Other</option>
                  </select>
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    History of eye surgeries or procedures
                  </label>
                  <input
                    type="text"
                    name="surgeryHistory"
                    value={patientEdit.surgeryHistory}
                    onChange={handleInputChange}
                    placeholder="Enter History of Eye Surgeries and Procedures"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Any other relevant medical conditions
                  </label>
                  <input
                    type="text"
                    name="relevantCondition"
                    value={patientEdit.relevantCondition}
                    onChange={handleInputChange}
                    placeholder="Enter Any Other Relevant Medical Conditions"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Current medications
                  </label>
                  <select
                    name="medication"
                    value={patientEdit.medication}
                    onChange={handleInputChange}
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  >
                    <option>Select Current Medications</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-start gap-3">
                <label className="text-[12px] text-[#777E90] font-bold uppercase">
                  Family history of ocular diseases
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="familyHistory"
                    value={patientEdit.familyHistory}
                    onChange={handleInputChange}
                    className="cursor-pointer"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Diabetic Retinopathy
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={patientEdit.address}
                    onChange={handleInputChange}
                    className="cursor-pointer"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Macular Edema
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="amd"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Macular Degeneration/ AMD (Age Related Macular Degeneration)
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="cataract"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Cataract
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="glaucoma"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Glaucoma
                  </label>
                </div>
              </div>
              <div>
                <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                  Symptoms
                </div>
                <div className="w-full h-full flex flex-col gap-2 mt-4">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Any current symptoms related to vision or eye
                  </label>
                  <textarea
                    name="symptoms"
                    value={patientEdit.symptoms}
                    onChange={handleInputChange}
                    placeholder="Symptoms related to vision or eye"
                    className="p-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[100px] rounded-[8px] focus:outline-none"
                  ></textarea>
                </div>
                <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                  Insurance Information
                </div>
                <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                  <div className="w-full h-full flex flex-col gap-2">
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      name="insurance"
                      value={patientEdit.insurance}
                      onChange={handleInputChange}
                      placeholder="Enter Insurance Provider"
                      className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                    />
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      Policy Number
                    </label>
                    <input
                      type="number"
                      name="policyNumber"
                      value={patientEdit.policyNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Insurance Provider"
                      className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                  Lifestyle and Habits
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="w-full h-full flex flex-col gap-2">
                    <label className="text-[12px] text-[#777E90] font-bold uppercase mt-4">
                      Occupation
                    </label>
                    <select
                      name="occupation"
                      value={patientEdit.occupation}
                      onChange={handleInputChange}
                      className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                    >
                      <option>Select Occupation</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <label className="text-[12px] text-[#777E90] font-bold uppercase mt-4">
                      Smoking or Alcohol Consumption
                    </label>
                    <select
                      name="consumption"
                      value={patientEdit.consumption}
                      onChange={handleInputChange}
                      className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                    >
                      <option>Select Smoking or Alcohol Consumption</option>
                      <option value="option1">Regular</option>
                      <option value="option2">Weekly</option>
                      <option value="option3">Occasionally</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-4 gap-3">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Hobbies or activities that might impact eye health
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      value="sports"
                    />
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      Sports
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      value="computer"
                    />
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      Frequent Computer Use
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Previous Eye Examinations
              </div>
              <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Date of Last Eye Examination
                  </label>
                  <input
                    type="date"
                    name="lastExam"
                    value={patientEdit.lastExam}
                    onChange={handleInputChange}
                    placeholder="Enter Date of Last Eye Examination"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Results of Any Previous Eye Tests (if available)
                  </label>
                  <input
                    type="text"
                    name="results"
                    value={patientEdit.results}
                    onChange={handleInputChange}
                    placeholder="Enter Results of Any Previous Eye Tests"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full h-full flex flex-col gap-2 mt-4">
                <label className="text-[12px] text-[#777E90] font-bold uppercase">
                  Name and Contact Information of Previous Eye Care Provider
                </label>
                <input
                  type="text"
                  name="providerInfo"
                  value={patientEdit.providerInfo}
                  onChange={handleInputChange}
                  placeholder="Enter Results of Any Previous Eye Tests"
                  className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Visual Acuity Information
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Any History of Vision Problems or Changes in Vision
                  </label>
                  <input
                    type="text"
                    name="visionProblem"
                    value={patientEdit.visionProblem}
                    onChange={handleInputChange}
                    placeholder="Enter Any History of Vision Problems or Changes in Vision"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Prescription for Glasses or Contact Lenses (if applicable)
                  </label>
                  <input
                    type="text"
                    name="contactLens"
                    value={patientEdit.contactLens}
                    onChange={handleInputChange}
                    placeholder="Enter Prescription for Glasses or Contact Lenses"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Allergies and Sensitivities
              </div>
              <div className="flex flex-col items-start mt-4 gap-3">
                <label className="text-[12px] text-[#777E90] font-bold uppercase">
                  Any Known Allergies, Especially to Medications or Substances
                  Used in Eye Care
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="penicillin"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Penicillin
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="pollen"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Pollen
                  </label>
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Emergency Contact
              </div>
              <div className="mt-4">
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Name and phone number of a person to contact in case of
                    emergency
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={patientEdit.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Enter Prescription for Glasses or Contact Lenses"
                    className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                Consent and Privacy
              </div>
              <div className="flex flex-col items-start mt-4 gap-3">
                <label className="text-[12px] text-[#777E90] font-bold uppercase">
                  Any Known Allergies, Especially to Medications or Substances
                  Used in Eye Care
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="consent"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Consent for Data Collection and Sharing for Healthcare
                    Purposes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    value="acknowledgement"
                  />
                  <label className="text-[12px] text-[#777E90] font-bold uppercase">
                    Acknowledgement of Privacy Practices and HIPAA Compliance
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-[48px] bg-[#313638] rounded-[8px] text-white mt-3"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

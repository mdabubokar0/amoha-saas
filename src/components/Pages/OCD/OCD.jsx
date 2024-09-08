import React, { useState, useEffect } from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import RetinaScan from "./RetinaScan";
import PatientInput from "./PatientInput";
import { Navbar } from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const OCD = () => {
  const [createStep, setCreateStep] = useState(1);
  const [searchStep, setSearchStep] = useState(1);
  const [active, setActive] = useState("");
  const [buttonVisible, setButtonVisible] = useState(true);
  const [condition, setCondition] = useState("");
  const [familyDisease, setFamilyDisease] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    bloodGroup: "",
    gender: "",
    address: "",
    number: "",
    email: "",
    condition: "",
    otherCondition: "",
    surgeryHistory: "",
    relevantCondition: "",
    medication: "",
    familyHistory: "",
    symptoms: "",
    insurance: "",
    policyNumber: "",
    occupation: "",
    consumption: "",
    lastExam: "",
    results: "",
    providerInfo: "",
    visionProblem: "",
    contactLens: "",
    emergencyContact: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const createPatient = () => {
    setActive("create");
    setButtonVisible(false);
  };

  const searchPatient = () => {
    setButtonVisible(false);
    setActive("search");
  };

  const nextSearchStep = () => {
    if (searchStep < 5) {
      setSearchStep(searchStep + 1);
    }
  };

  const prevSearchStep = () => {
    if (searchStep > 1) {
      setSearchStep(searchStep - 1);
    }
  };

  const handleClose = () => {
    setActive("");
    setButtonVisible(true);
    setCreateStep(1);
    setSearchStep(1);
  };

  const handleCondition = (event) => {
    setCondition(event.target.value);
  };

  const handleFamilyDisease = () => {
    setFamilyDisease(!familyDisease);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("http://18.212.83.122:8000/api/customers/create/", formData)
      .then((res) => console.log("Successful"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="px-[5%] md:flex md:justify-between md:bg">
        <Sidebar />
        <div className="w-full p-3 flex items-center justify-center mb-20 md:mb-0">
          {buttonVisible && (
            <div className="flex flex-col gap-4">
              <button
                onClick={searchPatient}
                className="w-[240px] h-[48px] bg-[#3174C4] rounded-[8px] shadow-xl text-white"
              >
                Existing Patient Profile
              </button>
              <button
                onClick={createPatient}
                className="w-[240px] h-[48px] border-[3px] border-[#3174C4] border-opacity-[30%] rounded-[8px]"
              >
                Create New Profile
              </button>
            </div>
          )}
          {active === "search" && (
            <div className="w-[340px] md:w-[800px] rounded-[20px] border-[.5px] border-[#c4c4c4] bg-white p-5 md:p-10 relative">
              <form>
                {searchStep === 1 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Search By Patient ID
                    </h1>
                    <div className="m-5 md:m-20">
                      <PatientInput
                        label="Patient ID"
                        type="number"
                        name="name"
                        placeholder="Enter Patient ID"
                      />
                    </div>
                  </div>
                )}
                {searchStep === 2 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Select Condition or Disease
                    </h1>
                    <div className="m-5 md:m-20 flex flex-col gap-2">
                      <label className="text-[12px] text-[#777E90] font-bold uppercase">
                        Conditions or Diseases
                      </label>
                      <select
                        value={condition}
                        onChange={handleCondition}
                        name="conditions"
                        className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                      >
                        <option>Select Condition or Disease</option>
                        <option value="dr">Diabetic Retinopathy</option>
                        <option value="me">
                          Macular Degeneration/AMD (Age Related Macular
                          Degeneration)
                        </option>
                        <option value="amd">Macular Degeneration</option>
                        <option value="cataract">Cataract</option>
                        <option value="glaucoma">Glaucoma</option>
                      </select>
                    </div>
                  </div>
                )}
                {searchStep === 3 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Retina Scan
                    </h1>
                    <div className="flex items-center gap-3">
                      <RetinaScan
                        label="Left Retina"
                        for="leftRetina"
                        id="leftRetina"
                        btn="Upload Image"
                      />
                      <RetinaScan
                        label="Right Retina"
                        for="rightRetina"
                        id="rightRetina"
                        btn="Upload Image"
                      />
                    </div>
                  </div>
                )}
                {searchStep === 4 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Retina Scan
                    </h1>
                    <div className="flex items-center gap-3">
                      <RetinaScan
                        label="Left Retina"
                        for="leftRetina"
                        id="leftRetina"
                        btn="ReUpload Image"
                      />
                      <RetinaScan
                        label="Right Retina"
                        for="rightRetina"
                        id="rightRetina"
                        btn="ReUpload Image"
                      />
                    </div>
                    <div className="w-full flex items-start justify-between gap-3 text-center my-3 text-[16px]">
                      <div className="w-1/2">
                        <h1 className="text-[20px] font-medium border-b-[1px] border-b-[#c4c4c4] w-[70%] pb-1 mb-1 m-auto">
                          Result
                        </h1>
                        <h1>DR : 1/1</h1>
                        <h1>Stage : Mild</h1>
                      </div>
                      <div className="w-1/2">
                        <h1 className="text-[20px] font-medium border-b-[1px] border-b-[#c4c4c4] w-[70%] pb-1 mb-1 m-auto">
                          Result
                        </h1>
                        <h1>DR : 1/1</h1>
                        <h1>Stage : Mild</h1>
                      </div>
                    </div>
                  </div>
                )}
                {searchStep === 5 && (
                  <div className="flex flex-col gap-[34px] items-center py-20">
                    <h1 className="text-center text-[28px] font-bold">
                      Ops! Patient wasn’t found
                    </h1>
                    <div className="flex gap-3">
                      <button
                        onClick={createPatient}
                        className="w-[180px] h-[48px] bg-[#313638] text-white rounded-[8px]"
                      >
                        Create New
                      </button>
                      <button
                        onClick={searchPatient}
                        className="w-[180px] h-[48px] bg-[#313638] text-white rounded-[8px]"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevSearchStep}
                    disabled={searchStep === 1}
                    className={`w-[120px] md:w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      (searchStep === 1 ? "cursor-not-allowed" : "",
                      searchStep === 4 ? "hidden" : "")
                    }`}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[120px] md:w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      searchStep === 1 ? "" : "hidden"
                    }`}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[120px] md:w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      searchStep === 2 ? "" : "hidden"
                    }`}
                  >
                    Start Diagnosis
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[120px] md:w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      searchStep === 3 ? "" : "hidden"
                    }`}
                  >
                    Scan
                  </button>
                  <button
                    type="button"
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white m-auto ${
                      searchStep === 4 ? "" : "hidden"
                    }`}
                  >
                    Get Detailed Report
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-[40px] font-normal rotate-45 absolute top-0 md:top-5 right-4 md:right-10"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
          )}
          {active === "create" && (
            <div className="w-[340px] md:w-[800px] rounded-[20px] border-[.5px] border-[#c4c4c4] bg-white p-5 md:p-10 relative">
              <form onSubmit={handleCreate}>
                <h1 className="text-center text-[18px] font-semibold">
                  Create Patient Profile
                </h1>
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
                      value={formData.name}
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
                      value={formData.dob}
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
                      value={formData.bloodGroup}
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
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                    >
                      <option>Select Patient Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer Not To Say">
                        Prefer Not to Say
                      </option>
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
                      value={formData.address}
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
                      value={formData.number}
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
                      value={formData.email}
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
                      value={formData.condition}
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
                    {condition === "anyother" && (
                      <div className="w-full h-full flex flex-col gap-2">
                        <label>Other Condition or Disease</label>
                        <input
                          type="text"
                          name="anyother"
                          placeholder="Enter Your Condition or Disease"
                          className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full h-full flex flex-col gap-2">
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      History of eye surgeries or procedures
                    </label>
                    <input
                      type="text"
                      name="surgeryHistory"
                      value={formData.surgeryHistory}
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
                      value={formData.relevantCondition}
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
                      value={formData.medication}
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
                      value={formData.familyHistory}
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
                      value={formData.address}
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
                      Macular Degeneration/ AMD (Age Related Macular
                      Degeneration)
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
                  <div className="flex items-center gap-2">
                    <input
                      onClick={handleFamilyDisease}
                      type="checkbox"
                      className="cursor-pointer"
                      value="glaucoma"
                    />
                    <label className="text-[12px] text-[#777E90] font-bold uppercase">
                      Any Other
                    </label>
                  </div>
                  {familyDisease && (
                    <div className="w-full">
                      <PatientInput
                        label="Other Family Disease"
                        type="text"
                        name="otherFamilyDisease"
                        placeholder="Enter Other Family Disease"
                      />
                    </div>
                  )}
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
                      value={formData.symptoms}
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
                        value={formData.insurance}
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
                        value={formData.policyNumber}
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
                        value={formData.occupation}
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
                        value={formData.consumption}
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
                      value={formData.lastExam}
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
                      value={formData.results}
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
                    value={formData.providerInfo}
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
                      value={formData.visionProblem}
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
                      value={formData.contactLens}
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
                      value={formData.emergencyContact}
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
                  Create
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-[40px] font-normal rotate-45 absolute top-0 md:top-5 right-4 md:right-10"
                >
                  +
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

import React, { useState } from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import RetinaScan from "./RetinaScan";
import PatientInput from "./PatientInput";
import PatientGender from "./PatientGender";

export const OCD = () => {
  const [createStep, setCreateStep] = useState(1);
  const [searchStep, setSearchStep] = useState(1);
  const [active, setActive] = useState("");
  const [buttonVisible, setButtonVisible] = useState(true);
  const [condition, setCondition] = useState("");
  const [familyDisease, setFamilyDisease] = useState(false);

  const createPatient = () => {
    setActive("create");
    setButtonVisible(false);
  };

  const searchPatient = () => {
    setButtonVisible(false);
    setActive("search");
  };

  const nextCreateStep = () => {
    if (createStep < 6) {
      setCreateStep(createStep + 1);
    }
  };

  const prevCreateStep = () => {
    if (createStep > 1) {
      setCreateStep(createStep - 1);
    }
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

  const starDiagnosis = () => {
    setButtonVisible(false);
    setActive("search");
    setSearchStep(2);
  };

  const close = () => {
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

  return (
    <div>
      <div className="px-[5%] flex justify-between bg">
        <Sidebar />
        <div className="w-full p-3 flex items-center justify-center">
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
            <div className="w-[800px] rounded-[20px] border-[.5px] border-[#c4c4c4] bg-white p-10 relative">
              <form>
                {searchStep === 1 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Search By Patient ID
                    </h1>
                    <div className="m-20">
                      <PatientInput
                        label="Patient ID"
                        type="number"
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
                    <div className="m-20 flex flex-col gap-2">
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
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      (searchStep === 1 ? "cursor-not-allowed" : "",
                      searchStep === 4 ? "hidden" : "")
                    }`}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      searchStep === 1 ? "" : "hidden"
                    }`}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      searchStep === 2 ? "" : "hidden"
                    }`}
                  >
                    Start Diagnosis
                  </button>
                  <button
                    type="button"
                    onClick={nextSearchStep}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
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
                    onClick={close}
                    className="text-[40px] font-normal rotate-45 absolute top-5 right-10"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
          )}
          {active === "create" && (
            <div className="w-[800px] rounded-[20px] border-[.5px] border-[#c4c4c4] bg-white p-10 relative">
              <form>
                {createStep === 1 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Create Patient Profile
                    </h1>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-1">
                      General Information
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Name"
                        type="text"
                        placeholder="Enter Patient Name"
                      />
                      <PatientInput
                        label="DOB/AGE"
                        type="date"
                        placeholder="Enter Patient DOB/AGE"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Blood Group"
                        type="text"
                        placeholder="Enter Patient Blood Group"
                      />
                      <PatientGender label="Gender" />
                    </div>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Contact Information
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Address"
                        type="text"
                        placeholder="Enter Patient Address"
                      />
                      <PatientInput
                        label="Phone No."
                        type="number"
                        placeholder="Enter Patient Phone No."
                      />
                      <PatientInput
                        label="Email"
                        type="email"
                        placeholder="Enter Patient Email"
                      />
                    </div>
                  </div>
                )}
                {createStep === 2 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Create Patient Profile
                    </h1>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-1">
                      Medical History
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-full h-full flex flex-col gap-2">
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Any existing ocular conditions or diseases
                        </label>
                        <select
                          value={condition}
                          onChange={handleCondition}
                          name="conditions"
                          className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                        >
                          <option>Select Condition or Disease</option>
                          <option value="dr">Diabetic Retinopathy</option>
                          <option value="me">Macular Degeneration/AMD</option>
                          <option value="amd">Macular Degeneration</option>
                          <option value="cataract">Cataract</option>
                          <option value="glaucoma">Glaucoma</option>
                          <option value="anyother">Any Other</option>
                        </select>
                        {condition === "anyother" && (
                          <div>
                            <PatientInput
                              label="Other Condition or Disease"
                              type="text"
                              placeholder="Enter Your Condition or Disease"
                            />
                          </div>
                        )}
                      </div>
                      <PatientInput
                        label="History of eye surgeries or procedures"
                        type="text"
                        placeholder="Enter History of Eye Surgeries and Procedures"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Any other relevant medical conditions"
                        type="text"
                        placeholder="Enter Any Other Relevant Medical Conditions"
                      />
                      <div className="w-full h-full flex flex-col gap-2">
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Current medications
                        </label>
                        <select
                          name="conditions"
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
                          className="cursor-pointer"
                          value="dr"
                        />
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Diabetic Retinopathy
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          value="me"
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
                            placeholder="Enter Other Family Disease"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {createStep === 3 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Create Patient Profile
                    </h1>
                    <div>
                      <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-1">
                        Symptoms
                      </div>
                      <div className="w-full h-full flex flex-col gap-2 mt-4">
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Any current symptoms related to vision or eye
                        </label>
                        <textarea
                          name="symptoms"
                          className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[100px] rounded-[8px] focus:outline-none"
                        ></textarea>
                      </div>
                      <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                        Insurance Information
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <PatientInput
                          label="Insurance Provider"
                          type="text"
                          placeholder="Enter Insurance Provider"
                        />
                        <PatientInput
                          label="Policy Number"
                          type="number"
                          placeholder="Enter Policy Number"
                        />
                      </div>
                      <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                        Lifestyle and Habits
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full h-full flex flex-col gap-2">
                          <label className="text-[12px] text-[#777E90] font-bold uppercase mt-4">
                            Occupation
                          </label>
                          <select
                            name="conditions"
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
                            name="conditions"
                            className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
                          >
                            <option>
                              Select Smoking or Alcohol Consumption
                            </option>
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
                            value="dr"
                          />
                          <label className="text-[12px] text-[#777E90] font-bold uppercase">
                            Sports
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="cursor-pointer"
                            value="me"
                          />
                          <label className="text-[12px] text-[#777E90] font-bold uppercase">
                            Frequent Computer Use
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {createStep === 4 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Create Patient Profile
                    </h1>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Previous Eye Examinations
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Date of Last Eye Examination"
                        type="date"
                        placeholder="Enter Date of Last Eye Examination"
                      />
                      <PatientInput
                        label="Results of Any Previous Eye Tests (if available)"
                        type="text"
                        placeholder="Enter Results of Any Previous Eye Tests"
                      />
                    </div>
                    <div className="mt-4">
                      <PatientInput
                        label="Name and Contact Information of Previous Eye Care Provider"
                        type="text"
                        placeholder="Enter Name and Contact Information of Previous Eye Care Provider"
                      />
                    </div>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Visual Acuity Information
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <PatientInput
                        label="Any History of Vision Problems or Changes in Vision"
                        type="text"
                        placeholder="Enter Any History of Vision Problems or Changes in Vision"
                      />
                      <PatientInput
                        label="Prescription for Glasses or Contact Lenses (if applicable)"
                        type="text"
                        placeholder="Enter Prescription for Glasses or Contact Lenses"
                      />
                    </div>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Allergies and Sensitivities
                    </div>
                    <div className="flex flex-col items-start mt-4 gap-3">
                      <label className="text-[12px] text-[#777E90] font-bold uppercase">
                        Any Known Allergies, Especially to Medications or
                        Substances Used in Eye Care
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          value="dr"
                        />
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Penicillin
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          value="me"
                        />
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Pollen
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {createStep === 5 && (
                  <div>
                    <h1 className="text-center text-[18px] font-semibold">
                      Create Patient Profile
                    </h1>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Emergency Contact
                    </div>
                    <div className="mt-4">
                      <PatientInput
                        label="Name and phone number of a person to contact in case of emergency"
                        type="text"
                        placeholder="Enter Name and phone number of a person to contact in case of emergency"
                      />
                    </div>
                    <div className="w-full border-b-[.5px] border-b-[#c4c4c4] mt-4">
                      Consent and Privacy
                    </div>
                    <div className="flex flex-col items-start mt-4 gap-3">
                      <label className="text-[12px] text-[#777E90] font-bold uppercase">
                        Any Known Allergies, Especially to Medications or
                        Substances Used in Eye Care
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          value="dr"
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
                          value="me"
                        />
                        <label className="text-[12px] text-[#777E90] font-bold uppercase">
                          Acknowledgement of Privacy Practices and HIPAA
                          Compliance
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {createStep === 6 && (
                  <div className="text-center">
                    <h1 className="text-[28px] font-semibold">
                      Patient Profile Successfully Created!
                    </h1>
                    <div className="py-10">
                      <h2>Patient Name : Mark Rober</h2>
                      <h2>Patient ID : 4378</h2>
                    </div>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevCreateStep}
                    disabled={createStep === 1}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      (createStep === 1 ? "cursor-not-allowed" : "",
                      createStep === 6 ? "hidden" : "")
                    }`}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextCreateStep}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      createStep === 5 || createStep === 6 ? "hidden" : ""
                    }`}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={nextCreateStep}
                    className={`w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      createStep === 5 ? "" : "hidden"
                    }`}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={starDiagnosis}
                    className={`m-auto w-[180px] h-[48px] bg-[#313638] rounded-[8px] text-white ${
                      createStep === 6 ? "" : "hidden"
                    }`}
                  >
                    Start Diagnosis
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="text-[40px] font-normal rotate-45 absolute top-5 right-10"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

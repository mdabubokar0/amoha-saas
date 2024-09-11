import React, { useEffect, useState } from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      axios
        .get("http://18.212.83.122:8000/api/user/details/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  const handleInputChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    axios
      .post("http://18.212.83.122:8000/api/user/details/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        profile,
      })
      .then((res) => {
        setProfile(res.data);
        console.log("Updated");
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="px-[5%] flex justify-between bg mb-20 md:mb-0">
        <Sidebar />
        <div className="w-full p-3 flex flex-col lg:flex-row gap-4 lg:gap-3 justify-center m-auto">
          <form
            onSubmit={handleUpdateProfile}
            className="border-[.5px] border-[#c4c4c4] rounded-2xl p-10 mt-3"
          >
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="em"
                className="text-[12px] text-[#777E90] font-bold uppercase"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
                className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="em"
                className="text-[12px] text-[#777E90] font-bold uppercase"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                required
                className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="pwd"
                className="text-[12px] text-[#777E90] font-bold uppercase"
              >
                Password
              </label>
              <input
                type="password"
                name="pwd"
                value={profile.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
                className="px-3 text-[12px] text-[#777E90] bg-[#F4F5F6] h-[48px] rounded-[8px] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full h-[48px] rounded-lg bg-[#3174C4] border-[#c4c4c4] border-[.5px] flex items-center justify-center text-md text-white hover:bg-white hover:text-black transition-all"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

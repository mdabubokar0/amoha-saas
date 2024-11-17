import React, { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { SmallBar } from "../../Sidebar/SmallBar";
import { Navbar } from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const PatientRecords = () => {
  const navigate = useNavigate();
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://18.212.83.122:8000/api/customers/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setPatientList(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to fetch patient records");
          setLoading(false);
        });
    }
  }, [navigate]);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this patient?")) {
      axios
        .delete(`http://18.212.83.122:8000/api/customers/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(() => {
          setPatientList(patientList.filter((patient) => patient.id !== id));
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to delete patient record");
        });
    }
  };

  const filteredPatients = patientList.filter((p) =>
    p.id.toString().includes(searchTerm)
  );

  return (
    <div>
      <Navbar />
      <div className="pl-[5%] flex justify-between bg pb-20 md:pb-0">
        <Sidebar />
        <div className="w-full p-3">
          <div className="bg-white px-5 md:px-[80px] py-5 rounded-[20px] border-[.5px] border-[#c4c4c4]">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <h2 className="text-[28px] font-medium">Patient Records</h2>
              <div className="flex items-center gap-3 w-full md:w-[300px] h-[48px] rounded-[50px] bg-[#EFF3F4] px-5">
                <img src="img/search.svg" alt="search" />
                <input
                  type="search"
                  placeholder="Search Patient by ID"
                  className="focus:outline-none bg-[#EFF3F4] h-full w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="relative overflow-x-auto">
                <table className="w-full border-collapse rounded-[20px] mt-4">
                  <thead>
                    <tr>
                      <th className="px-3" scope="col">
                        ID
                      </th>
                      <th className="px-3" scope="col">
                        Name
                      </th>
                      <th className="px-3" scope="col">
                        Gender
                      </th>
                      <th className="px-3" scope="col">
                        Blood
                      </th>
                      <th className="px-3" scope="col">
                        Status
                      </th>
                      <th className="px-3" scope="col">
                        Details
                      </th>
                      <th className="px-3" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((p) => (
                      <tr key={p.id}>
                        <td className="px-3">{p.id}</td>
                        <td className="px-3">{p.name}</td>
                        <td className="px-3">{p.gender}</td>
                        <td className="px-3">{p.blood}</td>
                        <td className="px-3">{p.status}</td>
                        <td>
                          <Link to={`/patientedit/${p.id}`}>
                            <img
                              src="img/details.svg"
                              alt="details"
                              className="m-auto cursor-pointer"
                            />
                          </Link>
                        </td>
                        <td>
                          <img
                            src="img/delete.svg"
                            alt="delete"
                            className="m-auto cursor-pointer"
                            onClick={() => handleDelete(p.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <SmallBar />
    </div>
  );
};

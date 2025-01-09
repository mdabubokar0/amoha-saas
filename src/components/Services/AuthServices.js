// services/authService.js
import axiosClient from "../Axios/axiosClient";
import URL from "../Axios/api";
console.log(URL);

export const loginUser = async (credentials) => {
  const response = await axiosClient.post("/auth/login", credentials);
  return response.data;
};

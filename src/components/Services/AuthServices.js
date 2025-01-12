// services/authService.js
import axiosClient from "../Axios/axiosClient";
import URL from "../Axios/api";

export const loginUser = async (credentials) => {
  const response = await axiosClient.post(URL.LOGIN.url, credentials);
  return response.data;
};

export const fetchUserDetails = async (credentials) => {
  const response = await axiosClient.get(
    URL.FETCH_USER_DETAILS.url,
    credentials
  );
  return response.data;
};

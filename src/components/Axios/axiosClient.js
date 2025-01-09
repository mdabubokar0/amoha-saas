import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000, // Timeout for requests
});

console.log(import.meta.env.VITE_BASE_URL);

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
    }
    if (error.code === "ECONNABORTED") {
      error.message = "Server error. Please try again!";
    }
    return Promise.reject(error);
  }
);

// API methods
export async function getRequest(URL, payload) {
  return axiosClient
    .get(URL, { params: payload })
    .then((response) => response.data);
}

export async function postRequest(URL, payload) {
  return axiosClient.post(URL, payload).then((response) => response.data);
}

export async function putRequest(URL, payload) {
  return axiosClient.put(URL, payload).then((response) => response.data);
}

export async function deleteRequest(URL, payload) {
  return axiosClient
    .delete(URL, { params: payload })
    .then((response) => response.data);
}

export default axiosClient;

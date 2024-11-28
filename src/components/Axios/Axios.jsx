import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000, // Timeout for requests
});

// Add request interceptor to include Authorization header dynamically
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

// Add response interceptor for handling errors
axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
    }
    if (err.code === "ECONNABORTED") {
      err.message = "Server error. Please try again!";
    }
    return Promise.reject(err);
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

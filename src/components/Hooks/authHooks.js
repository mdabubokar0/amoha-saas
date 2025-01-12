import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../Services/AuthServices";
import showToast from "../Utils/Toast";
import { useLocation, useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Save token to localStorage
      localStorage.setItem("token", data.data.token);

      // Retrieve the 'from' location if it exists, or default to the home page
      const from = location.state?.from || "/dashboard";
      // Redirect to the original route (or default route)
      navigate(from);

      showToast(data.message, "success");
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
      showToast(errorMessage, "error");
      console.error("Login failed:", errorMessage);
    },
  });
};

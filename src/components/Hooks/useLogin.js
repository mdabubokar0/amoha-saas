import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../Services/AuthServices";
import showToast from "../Utils/Toast";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Save token to localStorage
      //   localStorage.setItem("authToken", data.token);
      // Optional: Redirect to dashboard or another page
      //   window.location.href = "/dashboard";
      showToast(
        "Form submitted successfully, Someone will contact you soon!",
        "success"
      );
    },
    onError: (error) => {
      showToast(`${err.message}!`, "error");
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    },
  });
};

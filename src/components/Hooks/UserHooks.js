import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../Services/AuthServices";
import showToast from "../Utils/Toast";

export const useUserDetails = () => {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: fetchUserDetails, // Assuming this is a function that fetches user details
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "An error occurred while fetching user details.";
      showToast(errorMessage, "error");
      console.error("Fetching user details failed:", errorMessage);
    },
  });
};

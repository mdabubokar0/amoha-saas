import { toast, Slide } from "react-toastify";

const defaultOptions = {
  transition: Slide,
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeButton: false,
  className:
    "w-fit max-w-[360px] min-h-[56px] text-font1 font-texting text-sm rounded-2xl",
};

const showToast = (message, type = "default", options = defaultOptions) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    default:
      toast(message, options);
  }
};

export default showToast;

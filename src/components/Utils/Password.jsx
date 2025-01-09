import React, { useState, forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Password = forwardRef(
  (
    {
      type = "text",
      label = "",
      placeholder = "Enter your input",
      value = "",
      onChange,
      name,
      errors,
      className = "",
      ...rest
    },
    ref
  ) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    const hasError = errors?.[name];

    return (
      <div className={`${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold mb-3">
            {label}
          </label>
        )}
        <div className="relative w-full h-[48px]">
          {/* Input Field */}
          <input
            id={name}
            type={isPasswordVisible ? "text" : type}
            placeholder={placeholder}
            defaultValue={value}
            onChange={onChange}
            name={name}
            ref={ref}
            className={`w-full h-full bg-inputBg ${
              hasError ? "border-2 border-danger" : ""
            } px-[15px] pr-[45px] rounded-lg focus:outline-2 focus:bg-white focus:outline-primary font-medium`}
            {...rest}
          />

          {/* Eye Icon */}
          {type === "password" && (
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
            >
              {isPasswordVisible ? (
                <FaEye size={22} />
              ) : (
                <FaEyeSlash size={22} />
              )}
            </span>
          )}
        </div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div className="text-sx text-danger font-medium">{message}</div>
          )}
        />
      </div>
    );
  }
);

export default Password;

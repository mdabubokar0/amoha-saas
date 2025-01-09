import React, { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

const Input = forwardRef(
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
    const hasError = errors?.[name];
    return (
      <div className={`${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold mb-3">
            {label}
          </label>
        )}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
          name={name}
          ref={ref} // Attach the forwarded ref here
          className={`w-full h-[48px] bg-inputBg ${
            hasError ? "border-2 border-danger" : ""
          } px-[15px] rounded-lg focus:outline-2 focus:bg-white focus:outline-primary font-medium mb-1`}
          {...rest}
        />
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

export default Input;

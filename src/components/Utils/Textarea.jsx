import React, { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

const Textarea = forwardRef(
  (
    {
      rows = "5",
      label = "",
      placeholder = "Enter your text",
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
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
          name={name}
          ref={ref} // Attach the forwarded ref here
          className={`w-full bg-inputBg ${
            hasError ? "border-2 border-danger" : ""
          } p-[15px] rounded-lg focus:outline-2 focus:bg-white focus:outline-primary font-medium mb-1`}
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

export default Textarea;

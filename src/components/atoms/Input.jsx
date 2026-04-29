import React, { forwardRef } from "react";

const Input = forwardRef(({ type = "text", className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      {...props}
    />
  );
});

export default Input;
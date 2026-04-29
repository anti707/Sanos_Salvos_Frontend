import React from "react";

function Label({
  children,
  htmlFor,
  className = "",
  required = false,
  ...props
}) {
  if (!htmlFor) {
    console.warn("Label debería tener la prop 'htmlFor'");
  }

  return (
    <label htmlFor={htmlFor} className={className} {...props}>
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

export default Label;
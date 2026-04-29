import React from "react";

const variants = {
  default: "bg-gray text-white",
  success: "bg-green text-white",
  warning: "bg-yellow text-black",
  error: "bg-red text-white",
};

function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseClass = "px-2 py-1 rounded text-sm font-medium";
  const variantClass = variants[variant] || variants.default;

  return (
    <span
      className={`${baseClass} ${variantClass} ${className}`}
      role="status"
      aria-label={`Estado: ${children}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
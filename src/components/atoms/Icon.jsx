import React from "react";

const allowedIcons = ["location", "user", "map", "alert"];

function Icon({
  name,
  label,
  className = "",
  as: Component = "i",
  ...props
}) {
  const iconClass = allowedIcons.includes(name)
    ? `icon-${name}`
    : "icon-default";

  return (
    <Component
      className={`${iconClass} ${className}`}
      aria-hidden={!label}
      aria-label={label}
      {...props}
    />
  );
}

export default Icon;
import React from "react";
import "./Cssmarker.css";

function Marker({
  lat,
  lng,
  children,
  onClick,
  title,
  className = "",
  ...props
}) {
  if (lat == null || lng == null) {
    console.warn("Marker necesita lat y lng");
    return null;
  }

  return (
    <div
      className={`marker ${className}`}
      data-lat={lat}
      data-lng={lng}
      title={title}
      onClick={() => onClick?.({ lat, lng })}
      {...props}
    >
      {children || "📍"}
    </div>
  );
}

export default Marker;
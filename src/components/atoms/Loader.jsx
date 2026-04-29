import React from "react";
import "./CssLoader.css";

function Loader({
  size = 24,
  text = "",
  showText = false,
  className = "",
  ...props
}) {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className={`loader-container ${className}`}
      {...props}
    >
      <div
        className="loader"
        style={{ width: size, height: size }}
      />
      {showText && <span className="loader-text">{text}</span>}
    </div>
  );
}

export default Loader;
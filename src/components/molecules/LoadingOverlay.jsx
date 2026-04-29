import React from "react";

function LoadingOverlay({
  isLoading,
  text = "Cargando...",
  className = "",
  children,
  ...props
}) {
  if (!isLoading) return null;

  return (
    <div
      className={`overlay ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
      {...props}
    >
      <div className="overlay-content">
        <Loader />
        <Text>{text}</Text>
        {children}
      </div>
    </div>
  );
}

export default LoadingOverlay;
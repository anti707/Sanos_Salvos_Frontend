import React from "react";

const statusLabels = {
  online: "En línea",
  offline: "Sin conexión",
  pending: "Conectando...",
  unknown: "Desconocido",
};

function LocationStatus({
  status,
  showText = true,
  className = "",
  ...props
}) {
  const safeStatus = status || "unknown";
  const label = statusLabels[safeStatus] || statusLabels.unknown;

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="status"
      aria-live="polite"
      {...props}
    >
      <StatusIndicator status={safeStatus} />
      {showText && <Text>{label}</Text>}
    </div>
  );
}

export default LocationStatus;
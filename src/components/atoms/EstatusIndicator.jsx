import React from "react";

const statusMap = {
  online: "green",
  offline: "red",
  pending: "yellow",
};

function StatusIndicator({
  status,
  className = "",
  showText = false,
  ...props
}) {
  const color = statusMap[status] || "gray";

  return (
    <span
      className={`dot ${color} ${className}`}
      role="status"
      aria-label={`Estado: ${status}`}
      {...props}
    >
      {showText && <span className="ml-2">{status}</span>}
    </span>
  );
}

export default StatusIndicator;
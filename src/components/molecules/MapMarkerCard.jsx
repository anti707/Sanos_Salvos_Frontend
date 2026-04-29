import React from "react";

const statusMap = {
  online: "success",
  offline: "error",
  pending: "warning",
};

function MapMarkerCard({
  title,
  status,
  description,
  children,
  className = "",
  ...props
}) {
  const badgeVariant = statusMap[status] || "default";

  return (
    <div
      className={`card ${className}`}
      role="region"
      aria-label={`Información de ${title}`}
      {...props}
    >
      <div className="card-header">
        <Text variant="h3">{title}</Text>
        <Badge variant={badgeVariant}>{status}</Badge>
      </div>

      {description && (
        <Text variant="p" className="card-description">
          {description}
        </Text>
      )}

      {children && <div className="card-body">{children}</div>}
    </div>
  );
}

export default MapMarkerCard;
import React from "react";


function MapMarkerCard({
  title,
  status,
  description,
  children,
  className = "",
  ...props
}) {

  return (
    <div
      className={`card ${className}`}
      role="region"
      aria-label={`Información de ${title}`}
      {...props}
    >
      <div className="card-header">
        <Text variant="h3">{title}</Text>
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
import React from "react";

function MarkerWithTooltip({
  lat,
  lng,
  text,
  children,
  onClick,
  position = "top",
  className = "",
  ...props
}) {
  if (lat == null || lng == null) {
    console.warn("MarkerWithTooltip necesita lat y lng");
    return null;
  }

  const content = children || text;

  return (
    <Tooltip text={content} position={position}>
      <Marker
        lat={lat}
        lng={lng}
        onClick={onClick}
        className={className}
        {...props}
      />
    </Tooltip>
  );
}

export default MarkerWithTooltip;
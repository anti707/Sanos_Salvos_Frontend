import React from "react";

function InfoRow({
  icon,
  label,
  value,
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="group"
      aria-label={label}
      {...props}
    >
      {icon && <Icon name={icon} />}

      <div className="flex gap-1">
        <Text className="font-medium">{label}:</Text>
        {children || <Text>{value}</Text>}
      </div>
    </div>
  );
}

export default InfoRow;
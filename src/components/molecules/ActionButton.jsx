import React from "react";

function ActionButton({
  icon,
  children,
  iconPosition = "left",
  iconClassName = "",
  className = "",
  ariaLabel,
  ...props
}) {
  return (
    <Button
      className={`flex items-center gap-2 ${className}`}
      aria-label={ariaLabel || children}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <Icon name={icon} className={iconClassName} />
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <Icon name={icon} className={iconClassName} />
      )}
    </Button>
  );
}

export default ActionButton;
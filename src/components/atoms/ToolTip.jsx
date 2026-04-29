import React, { useState } from "react";
import "./CssToolTip.css";

function Tooltip({
  text,
  children,
  position = "top",
  className = "",
  ...props
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`tooltip ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      aria-describedby="tooltip-text"
      {...props}
    >
      {children}
      {visible && (
        <span
          id="tooltip-text"
          role="tooltip"
          className={`tooltip-text ${position}`}
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
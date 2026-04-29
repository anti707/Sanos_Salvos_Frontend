import React from 'react';

function Text({ children, variant = "p", className = "", ...props }) {
  const allowedVariants = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"];
  const Tag = allowedVariants.includes(variant) ? variant : "p";

  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
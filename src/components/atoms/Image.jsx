import React from 'react';

function Image({
  src,
  alt,
  className = "",
  loading = "lazy",
  ...props
}) {
    
  const handleError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
}

export default Image;
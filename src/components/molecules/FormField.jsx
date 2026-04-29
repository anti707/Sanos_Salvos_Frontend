import React from "react";

function FormField({
  label,
  error,
  id,
  required = false,
  className = "",
  ...props
}) {
  const inputId =
    id || `field-${Math.random().toString(36).slice(2, 9)}`;

  const errorId = `${inputId}-error`;

  return (
    <div className={className}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>

      <Input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      />

      {error && (
        <Text id={errorId} className="text-red">
          {error}
        </Text>
      )}
    </div>
  );
}

export default FormField;
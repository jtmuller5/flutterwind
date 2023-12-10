import React from 'react';

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type?: string; // Optional: to support different types like 'text', 'password', etc.
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder = '',
  value,
  onChange,
  className,
  type = 'text', // Default type is 'text'
}) => {
  return (
    <input
      type={type}
      className={`border p-2 rounded ${className} input-secondary`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextField;

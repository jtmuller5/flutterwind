import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="label cursor-pointer">
      <span className="label-text">{label}</span>
      <input type="checkbox" className="checkbox" {...props} />
    </label>
  );
};

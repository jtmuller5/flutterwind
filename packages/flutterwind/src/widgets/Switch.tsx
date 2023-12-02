import React, { useState } from "react";

const daisyToggleColors = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  success: "toggle-success",
  warning: "toggle-warning",
  info: "toggle-info",
  error: "toggle-error",
};

const daisyToggleSizes = {
  lg: "toggle-lg",
  md: "toggle-md", // default size
  sm: "toggle-sm",
  xs: "toggle-xs",
};

interface SwitchProps {
  label?: string | React.ReactNode | undefined;
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  className?: string;
  color?: keyof typeof daisyToggleColors;
  size?: keyof typeof daisyToggleSizes;
}

export const Switch: React.FC<SwitchProps> = ({
  isOn,
  onToggle,
  className,
  label,
  color = "primary",
  size = "md",
}: SwitchProps) => {
  const colorClass = daisyToggleColors[color];
  const sizeClass = daisyToggleSizes[size];
  const handleToggle = () => {
    onToggle(!isOn);
  };

  return (
    <div className={`form-control ${className}`}>
      <label className="label cursor-pointer">
        <div>{label}</div>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className={`toggle ${colorClass} ${sizeClass}`}
        />
      </label>
    </div>
  );
};

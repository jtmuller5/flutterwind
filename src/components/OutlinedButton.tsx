import React from "react";
import {FlutterConstants,  DaisyConstants } from "./Constants";

export function OutlinedButton({
  children,
  onPressed,
  className = "",
  color = "primary", // Default color
  padding = 0,
}: {
  children: React.ReactNode;
  onPressed: () => void;
  className?: string;
  color?: keyof typeof DaisyConstants.daisyButtons;
  padding?: keyof typeof FlutterConstants.padding;
}) {
  let _style = DaisyConstants.daisyButtons[color];
  let _padding = FlutterConstants.padding[padding];

  return (
    <button onClick={onPressed} className={`btn btn-outline ${_style} ${_padding} ${className}`}>
      {children}
    </button>
  );
}

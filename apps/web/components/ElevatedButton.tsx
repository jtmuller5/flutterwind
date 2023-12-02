import React from "react";
import FlutterConstants, { DaisyConstants } from "./Constants";
import { Center } from "./Center.js";

export function ElevatedButton({
  children,
  onClick,
  className = "",
  style = "primary",
  padding = 0, // Added padding parameter with default value
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  style?: keyof typeof DaisyConstants.daisyButtons;
  padding?: keyof typeof FlutterConstants.padding; // Added padding type
}) {
  let _style = DaisyConstants.daisyButtons[style];
  let _padding = FlutterConstants.padding[padding]; // Get the corresponding Tailwind padding class

  return (
    <button onClick={onClick} className={`btn shadow-lg ${_padding} ${className} ${_style}`}>
      <Center>{children}</Center>
    </button>
  );
}

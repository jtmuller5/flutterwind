import React from "react";
import {FlutterConstants,  DaisyConstants } from "./Constants";
import { Center } from "./Center";

export function ElevatedButton({
  children,
  onPressed,
  className = "",
  style = "primary",
  padding = 0, // Added padding parameter with default value
}: {
  children: React.ReactNode;
  onPressed: () => void;
  className?: string;
  style?: keyof typeof DaisyConstants.daisyButtons;
  padding?: keyof typeof FlutterConstants.padding; // Added padding type
}) {
  let _style = DaisyConstants.daisyButtons[style];
  let _padding = FlutterConstants.padding[padding]; // Get the corresponding Tailwind padding class

  return (
    <button onClick={onPressed} className={`btn shadow-lg ${_padding} ${className} ${_style}`}>
      <Center>{children}</Center>
    </button>
  );
}

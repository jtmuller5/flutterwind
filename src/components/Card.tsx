import React from "react";
import { FlutterConstants, DaisyConstants } from "./Constants";

export function Card({
  children,
  padding = 0,
  className = "",
  color = "base100", // Default color
  elevated = true, // If true, the card will have a shadow
}: {
  children: React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  className?: string;
  color?: keyof typeof DaisyConstants.daisyUIColors;
  elevated?: boolean;
}) {
  let _padding = FlutterConstants.padding[padding];
  let _color = DaisyConstants.daisyUIColors[color];
  let shadowClass = elevated ? "shadow-lg" : "";

  return <div className={`card ${_color} ${_padding} ${shadowClass} ${className}`}>{children}</div>;
}

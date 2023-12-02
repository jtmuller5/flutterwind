import React from "react";
import FlutterConstants, { DaisyConstants } from "./Constants";

export function AppBar({
  leading,
  title,
  actions,
  className = "",
  color = "base100", // Default color
  padding = 4,
}: {
  leading?: React.ReactNode;
  title: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  color?: keyof typeof DaisyConstants.daisyUIColors;
  padding?: keyof typeof FlutterConstants.padding;
}) {
  let _color = DaisyConstants.daisyUIColors[color];
  let _padding = FlutterConstants.padding[padding];

  return (
    <div className={`navbar ${_color} ${_padding} ${className}`}>
      {leading && <div className="flex-none btn btn-square">{leading}</div>}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      {actions && <div className="flex-none btn btn-square">{actions}</div>}
    </div>
  );
}

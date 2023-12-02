import React from "react";
import FlutterConstants from "./Constants.js";

export function ListTile({
  leading,
  title,
  subtitle,
  trailing,
  padding = 4,
  className = "",
}: {
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  className?: string;
}) {
  let _padding = FlutterConstants.padding[padding];

  return (
    <div className={`flex items-center ${_padding} ${className}`}>
      {leading && <div className="flex-none">{leading}</div>}
      <div className="flex-1 min-w-0 text-left pl-4">
        {" "}
        {/* Updated class here */}
        <p className="text-lg font-medium">{title}</p>
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
      {trailing && <div className="flex-none">{trailing}</div>}
    </div>
  );
}

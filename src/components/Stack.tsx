import React from "react";
import { FlutterConstants } from "./Constants";

export function Stack({
  children,
  padding = 0,
  className = "",
}: {
  children: React.ReactNode[] | React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  className?: string;
}) {
  let _padding = FlutterConstants.padding[padding];

  return (
    <div className={`${_padding} ${className} h-full w-full`}>
      {React.Children.map(children, (child, index) => child)}
    </div>
  );
}

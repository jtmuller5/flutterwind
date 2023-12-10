import React from "react";

export function Align({
  children,
  alignment = "center", // Default alignment
  className = "",
}: {
  children: React.ReactNode;
  alignment?:
    | "center"
    | "start"
    | "end"
    | "top"
    | "bottom"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end";
  className?: string;
}) {
  let alignmentClasses = {
    center: "justify-center items-center",
    start: "justify-start items-center",
    end: "justify-end items-center",
    top: "justify-center items-start",
    bottom: "justify-center items-end",
    "top-start": "justify-start items-start",
    "top-end": "justify-end items-start",
    "bottom-start": "justify-start items-end",
    "bottom-end": "justify-end items-end",
  };

  return (
    <div className={`flex ${alignmentClasses[alignment]} ${className} h-full w-full`}>
      {children}
    </div>
  );
}

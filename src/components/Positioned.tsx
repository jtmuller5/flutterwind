import React from "react";
import { Center } from "./Center";

interface PositionedProps {
  children: React.ReactNode;
  top?: keyof typeof topPositions;
  right?: string;
  bottom?: string;
  left?: string;
  className?: string;
}

const topPositions = {
  0: "top-0",
  1: "top-1",
  2: "top-2",
  3: "top-3",
  4: "top-4",
  5: "top-5",
  6: "top-6",
  7: "top-7",
  8: "top-8",
  9: "top-9",
  10: "top-10",
  11: "top-11",
  12: "top-12",
  14: "top-14",
  16: "top-16",
  20: "top-20",
  24: "top-24",
  28: "top-28",
  32: "top-32",
  36: "top-36",
  40: "top-40",
  44: "top-44",
  48: "top-48",
  52: "top-52",
  56: "top-56",
  60: "top-60",
  64: "top-64",
  72: "top-72",
  80: "top-80",
  96: "top-96",
};

const rightPositions = {
  0: "right-0",
  1: "right-1",
  2: "right-2",
  3: "right-3",
  4: "right-4",
  5: "right-5",
  6: "right-6",
  7: "right-7",
  8: "right-8",
  9: "right-9",
  10: "right-10",
  11: "right-11",
  12: "right-12",
  14: "right-14",
  16: "right-16",
  20: "right-20",
  24: "right-24",
  28: "right-28",
  32: "right-32",
  36: "right-36",
  40: "right-40",
  44: "right-44",
  48: "right-48",
  52: "right-52",
  56: "right-56",
  60: "right-60",
  64: "right-64",
  72: "right-72",
  80: "right-80",
  96: "right-96",
};

const leftPositions = {
  0: "left-0",
  1: "left-1",
  2: "left-2",
  3: "left-3",
  4: "left-4",
  5: "left-5",
  6: "left-6",
  7: "left-7",
  8: "left-8",
  9: "left-9",
  10: "left-10",
  11: "left-11",
  12: "left-12",
  14: "left-14",
  16: "left-16",
  20: "left-20",
  24: "left-24",
  28: "left-28",
  32: "left-32",
  36: "left-36",
  40: "left-40",
  44: "left-44",
  48: "left-48",
  52: "left-52",
  56: "left-56",
  60: "left-60",
  64: "left-64",
  72: "left-72",
  80: "left-80",
  96: "left-96",
};

const bottomPositions = {
  0: "bottom-0",
  1: "bottom-1",
  2: "bottom-2",
  3: "bottom-3",
  4: "bottom-4",
  5: "bottom-5",
  6: "bottom-6",
  7: "bottom-7",
  8: "bottom-8",
  9: "bottom-9",
  10: "bottom-10",
  11: "bottom-11",
  12: "bottom-12",
  14: "bottom-14",
  16: "bottom-16",
  20: "bottom-20",
  24: "bottom-24",
  28: "bottom-28",
  32: "bottom-32",
  36: "bottom-36",
  40: "bottom-40",
  44: "bottom-44",
  48: "bottom-48",
  52: "bottom-52",
  56: "bottom-56",
  60: "bottom-60",
  64: "bottom-64",
  72: "bottom-72",
  80: "bottom-80",
  96: "bottom-96",
};

export function Positioned({
  children,
  top,
  right,
  bottom,
  left,
  fill,
  className,
}: {
  children: React.ReactNode;
  top?: keyof typeof topPositions;
  right?: keyof typeof rightPositions;
  bottom?: keyof typeof bottomPositions;
  left?: keyof typeof leftPositions;
  fill?: boolean;
  className?: string;
}) {
  let positionClasses = fill
    ? "top-0 right-0 bottom-0 left-0"
    : `
    ${top ? topPositions[top] : ""} 
    ${right ? rightPositions[right] : ""} 
    ${bottom ? bottomPositions[bottom] : ""} 
    ${left ? leftPositions[left] : ""}`;

  return <div className="h-full w-full relative">
    <div className={`${positionClasses} absolute ${className}`}>{children}</div>
  </div>;
}

export default Positioned;

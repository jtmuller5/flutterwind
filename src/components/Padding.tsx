import React from 'react';
import { FlutterConstants, DaisyConstants } from "./Constants";

interface PaddingProps {
  children: React.ReactNode;
  padding: keyof typeof FlutterConstants.padding; // Utilizing the predefined padding constants
  className?: string;
}

export const Padding: React.FC<PaddingProps> = ({ children, padding, className = '' }) => {
  const paddingClass = FlutterConstants.padding[padding];

  return (
    <div className={`${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

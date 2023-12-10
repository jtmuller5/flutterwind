import React from 'react';

interface ColoredBoxProps {
  color: string; // This should be a Tailwind CSS color class
  children: React.ReactNode;
  className?: string;
}

export const ColoredBox: React.FC<ColoredBoxProps> = ({ color, children, className }) => {
  return (
    <div className={`${className}`} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

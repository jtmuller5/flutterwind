import React from 'react';

interface ClipRRectProps {
  children: React.ReactNode;
  borderRadius: string; // CSS value for border-radius
  className?: string;
}

export const ClipRRect: React.FC<ClipRRectProps> = ({ children, borderRadius, className }) => {
  const style = {
    borderRadius: borderRadius,
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

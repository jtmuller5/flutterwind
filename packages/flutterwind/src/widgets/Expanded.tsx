import React from 'react';

interface ExpandedProps {
  children: React.ReactNode;
  className?: string;
}

export const Expanded: React.FC<ExpandedProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`grow ${className}`}>
      {children}
    </div>
  );
};

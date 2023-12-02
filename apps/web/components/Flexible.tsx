import React from 'react';

interface FlexibleProps {
  children: React.ReactNode;
  flex?: number; // Flex factor
  className?: string;
}

export const Flexible: React.FC<FlexibleProps> = ({
  children,
  flex = 1, // Default flex factor
  className = ''
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

import React from 'react';

interface FlexibleProps {
  children: React.ReactNode;
  grow?: boolean; // Whether the component can grow
  shrink?: boolean; // Whether the component can shrink
  className?: string;
}

export const Flexible: React.FC<FlexibleProps> = ({
  children,
  grow = true,
  shrink = false,
  className = '',
}) => {
  const flexClass = `${grow ? 'grow' : ''} ${shrink ? 'flex-shrink' : ''}`;

  return (
    <div className={`flex ${flexClass} ${className}`}>
      {children}
    </div>
  );
};

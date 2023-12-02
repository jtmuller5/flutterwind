import React from 'react';

interface WrapProps {
  children: React.ReactNode;
  spacing?: number; // Optional spacing between children
  runSpacing?: number; // Optional spacing between lines
  direction?: 'horizontal' | 'vertical'; // Direction of the wrap
  className?: string;
}

export const Wrap: React.FC<WrapProps> = ({
  children,
  spacing = 0,
  runSpacing = 0,
  direction = 'horizontal',
  className = '',
}) => {
  const wrapStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${runSpacing}px ${spacing}px`,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
  };

  return (
    <div style={wrapStyle} className={className}>
      {children}
    </div>
  );
};

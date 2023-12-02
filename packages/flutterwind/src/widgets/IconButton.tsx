import React from 'react';

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode; // The icon to be displayed
  ariaLabel: string; // Accessible label for screen readers
  className?: string;
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  ariaLabel,
  className = '',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-circle btn-ghost ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

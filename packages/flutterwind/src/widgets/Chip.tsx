import React from 'react';

interface ChipProps {
  label: string;
  onDelete?: () => void; // Optional delete handler
  color?: string; // Optional color customization
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ label, onDelete, color = 'bg-gray-200', className = '' }) => {
  return (
    <div className={`inline-flex items-center ${color} ${className} px-2 py-1 rounded-full text-sm`}>
      {label}
      {onDelete && (
        <button onClick={onDelete} className="ml-2">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 9.4l-2.6-2.6L6 8l2.6 2.6L6 13.2l1.4 1.4L10 11.8l2.6 2.6 1.4-1.4-2.6-2.6 2.6-2.6-1.4-1.4L10 9.4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

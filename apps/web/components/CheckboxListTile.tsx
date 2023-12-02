import React, { useState } from 'react';

type ControlAffinity = 'leading' | 'trailing';

interface CheckboxListTileProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  initiallyChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  controlAffinity?: ControlAffinity;
}

export const CheckboxListTile: React.FC<CheckboxListTileProps> = ({
  title,
  subtitle,
  initiallyChecked = false,
  onChange,
  controlAffinity = 'leading'
}) => {
  const [isChecked, setIsChecked] = useState(initiallyChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  const Checkbox = (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleToggle}
      className="checkbox checkbox-primary"
    />
  );

  return (
    <label className="flex items-center cursor-pointer space-x-3">
      {controlAffinity === 'leading' && Checkbox}
      <div className="flex flex-col">
        <span className="text-lg font-medium">{title}</span>
        {subtitle && <span className="text-sm">{subtitle}</span>}
      </div>
      {controlAffinity === 'trailing' && Checkbox}
    </label>
  );
};

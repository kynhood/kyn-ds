import { useState } from "react";
import clsx from "clsx";
import "./chips.css"; 
export interface ChipsProps {
  label: string;
  disabled?: boolean; 
}
export default function Chips({
  label,
  disabled = false,
}: ChipsProps) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    if (!disabled) {
      setIsSelected(!isSelected);
    }
  };
  const chipClass = clsx(
    "chips-container",
    {
      "chips-active": isSelected && !disabled,
      "chips-inactive": !isSelected && !disabled,
      "chips-disabled": disabled,
    }
  );
  return (
    <div className={chipClass} onClick={handleClick} aria-disabled={disabled ? "true" : undefined} role="button">
      <span className="chips-label">{label}</span>
    </div>
  );
}
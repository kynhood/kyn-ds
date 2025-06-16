import React, { useState } from "react";
import clsx from "clsx";
import "./checkbox.css";

export interface CheckboxProps {
  label?: string;
  initialChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  error?: boolean;
}

export default function Checkbox({
  label,
  initialChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  error = false,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setIsChecked(initialChecked);
  }, [initialChecked]);

  React.useEffect(() => {
    console.log("initialChecked changed:", initialChecked);
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, initialChecked]);

  const handleChange = () => {
    if (!disabled) {
      const newCheckedState = !isChecked;
      setIsChecked(newCheckedState);
      if (onChange) {
        onChange(newCheckedState);
      }
    }
  };

  const checkboxClass = clsx(
    "checkbox-container",
    {
      "checkbox-checked": isChecked && !indeterminate,
      "checkbox-disabled": disabled,
      "checkbox-error": error,
      "checkbox-indeterminate": indeterminate,
    }
  );

  return (
    <label className={checkboxClass}>
      <input
        type="checkbox"
        ref={checkboxRef}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        data-indeterminate={indeterminate ? "true" : "false"}
        aria-invalid={error ? "true" : "false"}
      />
      <span className="checkbox-custom"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
} 
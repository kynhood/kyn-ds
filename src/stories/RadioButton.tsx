import React from 'react';
import './RadioButton.css';

interface RadioButtonProps {
  category?: 'inactive' | 'active' | 'error';
  state?: 'active' | 'disabled';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({ category = 'inactive', state = 'active', onChange }: RadioButtonProps) {
  const renderRadioButton = () => {
    let strokeColor;
    let strokeWidth = "3";
    let r = "8.5";

    if (state === 'disabled') {
      switch (category) {
        case 'active':
          strokeColor = 'var(--color-accent-color-blue-blue-200)';
          strokeWidth = "6";
          r = "7";
          break;
        case 'inactive':
        default:
          strokeColor = 'var(--color-neutral-color-dark-dark-50)';
          break;
      }
    } else {
      switch (category) {
        case 'active':
          strokeColor = 'var(--color-accent-color-blue-blue-500)';
          strokeWidth = "6";
          r = "7";
          break;
        case 'error':
          strokeColor = 'var(--color-accent-color-red-red-500)';
          break;
        case 'inactive':
        default:
          strokeColor = 'var(--color-neutral-color-dark-dark-200)';
          break;
      }
    }

    return (
      <svg
        className="radio-button-svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <circle
          cx="10"
          cy="10"
          r={r}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };

  return (
    <div className="radio-button-container">
      <input
        type="radio"
        onChange={onChange}
        className="radio-button-input"
      />
      <label className="radio-button-label">
        {renderRadioButton()}
      </label>
    </div>
  );
} 
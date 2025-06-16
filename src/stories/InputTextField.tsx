import React from 'react';
import './inputTextField.css';

interface InputTextFieldProps {
  state?: 'inactive' | 'active' | 'disabled' | 'error';
  heading?: string;
  helpText?: string;
  counter?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTextField({
  state = 'inactive',
  heading = 'Heading',
  helpText = 'Help Text',
  counter = 'Counter',
  value = '',
  onChange,
}: InputTextFieldProps) {
  const getBorderColor = () => {
    switch (state) {
      case 'error':
        return 'var(--color-accent-color-red-red-500)';
      case 'disabled':
        return 'var(--color-neutral-color-dark-dark-100)';
      default:
        return 'var(--color-neutral-color-dark-dark-100)';
    }
  };

  const getTextColor = () => {
    switch (state) {
      case 'disabled':
        return 'var(--color-neutral-color-dark-dark-200)';
      case 'error':
        return 'var(--color-accent-color-red-red-500)';
      default:
        return 'var(--color-neutral-color-dark-dark-400)';
    }
  };

  const getHeadingTextColor = () => {
    if (state === 'disabled') {
      return 'var(--color-neutral-color-dark-dark-200)';
    }
    return 'var(--color-neutral-color-dark-dark-500)';
  };

  const getInfoCircleFill = () => {
    if (state === 'disabled') {
      return 'var(--color-neutral-color-dark-dark-100)';
    }
    if (state === 'error') {
      return 'var(--color-accent-color-red-red-500)';
    }
    return 'var(--color-neutral-color-dark-dark-400)';
  };

  const isTextVisible = state === 'active' || state === 'error' || state === 'disabled';

  return (
    <div className="input-text-field-container">
      <div className={`wrapper ${state}`}>
        <div className="input-wrapper" style={{ borderColor: getBorderColor() }}>
          <div className="input-content">
            <div className="heading-wrapper">
              <p className="heading" style={{ color: getHeadingTextColor() }}>{heading}</p>
            </div>
            {state === 'active' && (
              <input
                type="text"
                className="text-input"
                value={value}
                onChange={onChange}
                style={{ color: getTextColor() }}
              />
            )}
          </div>
        </div>
        <div className="help-counter-wrapper">
          <div className="help-text-group">
            <div className="info-circle">
              <svg
                className="info-circle-svg"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 15 15"
              >
                <g>
                  <path
                    d="M7.16667 11C7.44281 11 7.66667 10.7761 7.66667 10.5V6.5C7.66667 6.22386 7.44281 6 7.16667 6C6.89052 6 6.66667 6.22386 6.66667 6.5V10.5C6.66667 10.7761 6.89052 11 7.16667 11Z"
                    fill={getInfoCircleFill()}
                  />
                  <path
                    d="M7.16667 3.83333C7.53486 3.83333 7.83333 4.13181 7.83333 4.5C7.83333 4.86819 7.53486 5.16667 7.16667 5.16667C6.79848 5.16667 6.5 4.86819 6.5 4.5C6.5 4.13181 6.79848 3.83333 7.16667 3.83333Z"
                    fill={getInfoCircleFill()}
                  />
                  <path
                    clipRule="evenodd"
                    d="M0 7.16667C0 3.20863 3.20863 0 7.16667 0C11.1247 0 14.3333 3.20863 14.3333 7.16667C14.3333 11.1247 11.1247 14.3333 7.16667 14.3333C3.20863 14.3333 0 11.1247 0 7.16667ZM7.16667 1C3.76091 1 1 3.76091 1 7.16667C1 10.5724 3.76091 13.3333 7.16667 13.3333C10.5724 13.3333 13.3333 10.5724 13.3333 7.16667C13.3333 3.76091 10.5724 1 7.16667 1Z"
                    fill={getInfoCircleFill()}
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </div>
            {isTextVisible && (
              <p className="help-text" style={{ color: getTextColor() }}>{helpText}</p>
            )}
          </div>
          {isTextVisible && (
            <p className="counter" style={{ color: getTextColor() }}>{counter}</p>
          )}
        </div>
      </div>
    </div>
  );
} 
import React, { useState } from 'react';
import './inputTextField.css';

interface InputTextFieldProps {
  state?: 'inactive' | 'active' | 'disabled' | 'error';
  heading?: string;
  helpText?: string;
  counter?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  state = 'inactive',
  heading = '',
  helpText = '',
  counter = '',
  value = '',
  onChange = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);

  const getTextColor = () => {
    switch (state) {
      case 'disabled':
        return 'var(--color-neutral-color-dark-dark-200)';
      case 'error':
        return 'var(--color-accent-color-red-red-500)';
      case 'inactive':
        return '#585858';
      default:
        return 'var(--color-neutral-color-dark-dark-400)';
    }
  };

  const getHeadingTextColor = () => {
    if (state === 'disabled') {
      return 'var(--color-neutral-color-dark-dark-200)';
    }
    if (state === 'inactive') {
      return '#585858';
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

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsActive(false);
    }
  };

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      const input = document.querySelector('.text-input') as HTMLInputElement;
      input?.focus();
    }, 0);
  };

  return (
    <div className="input-text-field-container">
      <div 
        className={`input-wrapper ${isActive ? 'active' : ''} ${value ? 'has-content' : ''}`}
        data-state={state}
        onClick={!isActive ? handleClick : undefined}
        style={{ cursor: !isActive ? 'pointer' : 'default' }}
      >
        <div className="input-content-wrapper">
          <div className="input-content">
            <div className="heading-wrapper">
              <p className="heading" style={{ color: getHeadingTextColor() }}>
                {heading}
              </p>
            </div>
            <input
              className="text-input"
              type="text"
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              style={{ color: getTextColor() }}
              autoFocus={isActive}
            />
          </div>
          <div className="help-counter-wrapper">
            <div className="help-text-group">
              {isTextVisible && (
                <div className="info-circle">
                  <svg className="info-circle-svg" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1_2)">
                      <path
                        d="M7.16667 4.33333C7.16667 4.70152 7.46515 5 7.83333 5C8.20152 5 8.5 4.70152 8.5 4.33333C8.5 3.96514 8.20152 3.66667 7.83333 3.66667C7.46515 3.66667 7.16667 3.96514 7.16667 4.33333ZM7.16667 6.16667C6.79848 6.16667 6.5 6.46514 6.5 6.83333V11.1667C6.5 11.5349 6.79848 11.8333 7.16667 11.8333C7.53486 11.8333 7.83333 11.5349 7.83333 11.1667V6.83333C7.83333 6.46514 7.53486 6.16667 7.16667 6.16667ZM7.16667 14.3333C3.20863 14.3333 0 11.1247 0 7.16667C0 3.20863 3.20863 0 7.16667 0C11.1247 0 14.3333 3.20863 14.3333 7.16667C14.3333 11.1247 11.1247 14.3333 7.16667 14.3333ZM7.16667 1C3.76091 1 1 3.76091 1 7.16667C1 10.5724 3.76091 13.3333 7.16667 13.3333C10.5724 13.3333 13.3333 10.5724 13.3333 7.16667C13.3333 3.76091 10.5724 1 7.16667 1Z"
                        fill={getInfoCircleFill()}
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              )}
              {isTextVisible && (
                <p className="help-text" style={{ color: getTextColor() }}>
                  {helpText}
                </p>
              )}
            </div>
            {isTextVisible && (
              <p className="counter" style={{ color: getTextColor() }}>
                {counter}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTextField;
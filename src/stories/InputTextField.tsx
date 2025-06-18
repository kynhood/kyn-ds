import React, { useState, useEffect, useRef } from 'react';
import sdk from '@stackblitz/sdk';
import './inputTextField.css';

interface InputTextFieldProps {
  heading?: string;
  helpText?: string;
  maxLength?: number;
  showHelpText?: boolean;
  showCounter?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MAX_HELP_TEXT_CHARS = 50;

const InputTextField: React.FC<InputTextFieldProps> = ({
  heading = '',
  helpText = '',
  maxLength,
  showHelpText = true,
  showCounter = true,
  disabled = false,
  onChange = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState('');
  const stackblitzRef = useRef<HTMLDivElement>(null);

  // Validate helpText character count
  const validatedHelpText = helpText.length > MAX_HELP_TEXT_CHARS 
    ? helpText.substring(0, MAX_HELP_TEXT_CHARS)
    : helpText;
  
  if (helpText.length > MAX_HELP_TEXT_CHARS) {
    console.warn(`Help text exceeds ${MAX_HELP_TEXT_CHARS} character limit`);
  }

  // Calculate counter text
  const counter = maxLength ? `${value.length}/${maxLength}` : '';

  const getTextColor = () => {
    if (isError) {
      return 'var(--color-accent-color-red-red-500)';
    }
    return '#585858';
  };

  const getHeadingTextColor = () => {
    return '#585858';
  };

  const getInfoCircleFill = () => {
    if (isError) {
      return 'var(--color-accent-color-red-red-500)';
    }
    return 'var(--color-neutral-color-dark-dark-400)';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = maxLength ? e.target.value.slice(0, maxLength) : e.target.value;
    
    if (maxLength && newValue.length === maxLength) {
      setIsError(true);
    } else if (isError) {
      setIsError(false);
    }
    
    setValue(newValue);
    onChange(e);
  };

  const handleFocus = () => {
    console.log('Input field focused');
    setIsActive(true);
  };

  const handleBlur = () => {
    console.log('Input field blurred');
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

  useEffect(() => {
    if (stackblitzRef.current) {
      sdk.embedProjectId(
        stackblitzRef.current,
        'vitejs-vite-fygrfg7q',
        {
          forceEmbedLayout: true,
          openFile: 'index.html',
          height: 300
        }
      );
    }
  }, []);

  return (
    <div className="input-text-field-container">
      <div 
        className={`input-wrapper 
          ${isActive ? 'active' : ''} 
          ${value ? 'has-content' : ''} 
          ${disabled ? 'disabled' : ''}
        `}
        data-state={isError && !disabled ? 'error' : 'inactive'}
        onClick={!isActive && !disabled ? handleClick : undefined}
        style={{ cursor: !isActive && !disabled ? 'pointer' : 'default' }}
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
              onChange={!disabled ? handleChange : undefined}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={maxLength}
              disabled={disabled}
              style={{ color: getTextColor() }}
              autoFocus={isActive}
            />
          </div>
        </div>
      </div>
      <div className="help-counter-wrapper">
        {showHelpText && (
          <div className="help-text-group">
            <div className="info-circle">
              <svg className="info-circle-svg" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke={getInfoCircleFill()} stroke-width="1.5"/>
                <text x="8" y="11" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle" fill={getInfoCircleFill()}>i</text>
              </svg>
            </div>
            <p className="help-text" style={{ color: getTextColor() }}>
              {validatedHelpText}
            </p>
          </div>
        )}
        {showCounter && (
          <p className="counter" style={{ color: getTextColor() }}>
            {counter}
          </p>
        )}
      </div>
      <div ref={stackblitzRef} style={{ marginTop: '20px' }} />
    </div>
  );
};

export default InputTextField;
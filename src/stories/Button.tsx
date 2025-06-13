import "./button.css";
import { Earth } from "@solar-icons/react";

export interface ButtonProps {
  /** How large should the button be? */
  size?: "xsmall" | "small" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Is the button disabled? */
  disabled?: boolean;
  /** Show leading icon (default true) */
  leadingIcon?: boolean;
  /** Show trailing icon (default false) */
  trailingIcon?: boolean;
  /** What theme is the button? */
  theme?: "primary" | "accent" | "blur";
  /** What variant is the button? */
  variant?: "filled" | "outline" | "text";
  /** What specific color is the button for the accent theme? */
  color?: "blue" | "grey" | "dark";
}

/** Primary UI component for user interaction */
export const Button = ({
  size = "large",
  label,
  disabled = false,
  leadingIcon = true,
  trailingIcon = false,
  theme = "primary",
  variant = "filled",
  color,
  ...props
}: ButtonProps) => {
  // Icon sizes per button size
  const iconSizes = {
    large: 24,
    small: 20,
    xsmall: 16,
  };

  const icon = (
    <span className="storybook-button__icon" aria-hidden="true">
      <Earth size={iconSizes[size || "large"]} color="currentColor" />
    </span>
  );

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${theme}`,
        `storybook-button--${variant}`,
        color ? `storybook-button--${theme}--${color}` : "",
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {leadingIcon && icon}
      <span className="storybook-button__label">{label}</span>
      {trailingIcon && icon}
    </button>
  );
};

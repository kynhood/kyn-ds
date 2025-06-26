import "./button.css";
import { Earth } from "@solar-icons/react";
export interface ButtonProps {
  size?: "xsmall" | "small" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  theme?: "primary" | "accent" | "blur";
  variant?: "filled" | "outline" | "text";
  color?: "blue" | "grey" | "dark";
}
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
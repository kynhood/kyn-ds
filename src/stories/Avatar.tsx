import { User } from "@solar-icons/react";
import "./avatar.css";

interface AvatarProps {
  size?: "small" | "medium" | "large" | "extra-large";
  className?: string;
}

export default function Avatar({
  size = "medium",
  className,
}: AvatarProps) {
  const sizeClass = `avatar-${size}`;

  return (
    <div className={`avatar ${sizeClass} ${className}`} data-testid="avatar-component">
      <User className="avatar-image" />
    </div>
  );
} 
import React from "react";
import { User } from "@solar-icons/react";
import "./avatar.css";

interface AvatarProps {
  size?: "small" | "medium" | "large" | "extra-large";
}

export default function Avatar({
  size = "medium",
}: AvatarProps) {
  const sizeClass = `avatar-${size}`;

  return (
    <div className={`avatar ${sizeClass}`} data-testid="avatar-component">
      <User className="avatar-image" />
    </div>
  );
} 
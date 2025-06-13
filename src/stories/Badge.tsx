import clsx from "clsx";
import { CloseCircle, CheckCircle, InfoCircle, DangerTriangle } from "@solar-icons/react";
import "./badge.css";

export interface BadgeProps {
  type?: "error" | "warning" | "success" | "info" | "neutral-light" | "neutral-dark-alpha";
  label: string;
}

export default function Badge({
  type = "info",
  label,
}: BadgeProps) {
  const badgeClass = clsx(
    "badge-container",
    {
      "badge-error": type === "error",
      "badge-warning": type === "warning",
      "badge-success": type === "success",
      "badge-info": type === "info",
      "badge-neutral-light": type === "neutral-light",
      "badge-neutral-dark-alpha": type === "neutral-dark-alpha",
    }
  );

  const IconComponent = () => {
    switch (type) {
      case "error":
        return <CloseCircle className="badge-icon" />;
      case "warning":
        return <DangerTriangle className="badge-icon" />;
      case "success":
        return <CheckCircle className="badge-icon" />;
      case "info":
        return <InfoCircle className="badge-icon" />;
      case "neutral-light":
        return <InfoCircle className="badge-icon" />;
      case "neutral-dark-alpha":
        return <InfoCircle className="badge-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={badgeClass} role="status" aria-label={label}>
      <div className="badge-content">
        {IconComponent()}
        <span className="badge-label">{label}</span>
      </div>
    </div>
  );
} 
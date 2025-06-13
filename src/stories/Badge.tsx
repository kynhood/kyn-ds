import clsx from "clsx";
import { CloseCircle, CheckCircle, InfoCircle, DangerTriangle } from "@solar-icons/react";
import "./badge.css";

export interface BadgeProps {
  type?: "error" | "warning" | "success" | "info";
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
    }
  );

  const IconComponent = () => {
    switch (type) {
      case "error":
        return <CloseCircle size={12} />; /* Using size from Figma for text-size/regular/paragraph/small */
      case "warning":
        return <DangerTriangle size={12} />;
      case "success":
        return <CheckCircle size={12} />;
      case "info":
        return <InfoCircle size={12} />;
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
import React from "react";
import clsx from "clsx";
import "./banner.css"; // Import the CSS file for the banner

export interface BannerProps {
  type?: "error" | "warning" | "success" | "info";
  message: string;
}

export default function Banner({
  type = "info",
  message,
}: BannerProps) {
  const bannerClass = clsx(
    "banner-container",
    {
      "banner-error": type === "error",
      "banner-warning": type === "warning",
      "banner-success": type === "success",
      "banner-info": type === "info",
    }
  );

  const formattedMessage = message.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < message.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={bannerClass} role="status" aria-label={message}>
      <div className="banner-content">
        <p className="banner-message">{formattedMessage}</p>
      </div>
    </div>
  );
} 
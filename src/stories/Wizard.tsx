import React from "react";
import "./wizard.css";

export interface WizardProps {
  currentStep?: number;
  steps?: string[];
  onStepChange?: (step: number) => void;
  isDisabled?: boolean;
  showLabels?: boolean;
  completedSteps?: number[];
}

export default function Wizard({
  currentStep = 0,
  steps = ["Step 1", "Step 2", "Step 3"],
  onStepChange,
  isDisabled = false,
  showLabels = true,
  completedSteps = [],
}: WizardProps) {
  return (
    <div className="wizard">
      <div className="wizard-state-active">
        <div className="wizard-row">
          {steps.map((label, idx) => (
            <React.Fragment key={idx}>
              <div className="wizard-checkpoint-wrapper">
                <div className="wizard-checkpoint-inner">
                  <div className="wizard-checkpoint-box">
                    <div
                      className={`wizard-checkpoint-number${
                        idx <= currentStep
                          ? " wizard-number-active"
                          : " wizard-number-inactive"
                      }`}
                      style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
                      onClick={() => !isDisabled && onStepChange && onStepChange(idx)}
                    >
                      <p>{idx + 1}</p>
                    </div>
                    {showLabels && (
                      <div
                        className={`wizard-checkpoint-label${
                          idx === currentStep
                            ? " wizard-label-active"
                            : " wizard-label-inactive"
                        }`}
                      >
                        <p>{label}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`wizard-line${
                    idx < currentStep
                      ? " wizard-line-active"
                      : " wizard-line-inactive"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

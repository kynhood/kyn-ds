import React, { useState, useEffect } from "react";
import "./wizard.css";

export interface WizardProps {
  currentStep?: number;
  steps?: string[];
  onStepChange?: (step: number) => void;
  isDisabled?: boolean;
  showLabels?: boolean;
  maxSteps?: number;
}

export default function Wizard({
  currentStep: externalCurrentStep = 0,
  steps = ["Step 1", "Step 2"],
  onStepChange,
  isDisabled = false,
  showLabels = true,
  maxSteps = 2,
}: WizardProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [internalCurrentStep, setInternalCurrentStep] = useState(externalCurrentStep);

  useEffect(() => {
    setInternalCurrentStep(Math.min(externalCurrentStep, maxSteps - 1));
  }, [externalCurrentStep, maxSteps]);

  const handleStepClick = (stepIndex: number) => {
    if (isDisabled || !onStepChange) return;
    
    const newStep = Math.min(stepIndex, maxSteps - 1);
    setInternalCurrentStep(newStep);
    onStepChange(newStep);
    
    // Mark all steps up to and including the clicked step as completed
    const newCompletedSteps = [...new Set([...completedSteps, ...Array.from({ length: stepIndex + 1 }, (_, i) => i)])]
      .sort((a, b) => a - b)
      .filter(step => step < maxSteps);
    
    setCompletedSteps(newCompletedSteps);
  };

  const isStepActive = (stepIndex: number) => {
    return stepIndex <= safeCurrentStep || completedSteps.includes(stepIndex);
  };

  const displaySteps = steps.slice(0, maxSteps);
  
  // Ensure currentStep is within bounds
  const safeCurrentStep = Math.min(internalCurrentStep, displaySteps.length - 1);

  return (
    <div className="wizard">
      <div className="wizard-state-active">
        <div className="wizard-row">
          {displaySteps.map((label, idx) => (
            <React.Fragment key={idx}>
              <div className="wizard-checkpoint-wrapper">
                <div className="wizard-checkpoint-inner">
                  <div className="wizard-checkpoint-box">
                    <div
                      className={`wizard-checkpoint-number${
                        isStepActive(idx) && idx < displaySteps.length
                          ? " wizard-number-active"
                          : " wizard-number-inactive"
                      }`}
                      style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
                      onClick={() => handleStepClick(idx)}
                    >
                      <p>{idx + 1}</p>
                    </div>
                    {showLabels && (
                      <div
                        className={`wizard-checkpoint-label${
                          (idx <= safeCurrentStep || completedSteps.includes(idx)) && idx < displaySteps.length
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
              {idx < displaySteps.length - 1 && (
                <div
                  className={`wizard-line${
                    isStepActive(idx + 1) ? " wizard-line-active" : " wizard-line-inactive"
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
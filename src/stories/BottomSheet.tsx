import { CloseCircle } from '@solar-icons/react';
import "./bottomSheet.css";
import "../styles/designTokens.css";
import { Button } from "./Button";

interface BottomSheetProps {
  headingText?: string;
  paragraphText?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export default function BottomSheet({
  headingText = "Heading",
  paragraphText = "Paragraph",
  buttonLabel = "Button",
  onButtonClick,
}: BottomSheetProps) {
  return (
    <div className="bottom-sheet" data-testid="bottom-sheet">
      <div className="bottom-sheet-container">
        <div className="bottom-sheet-content-area">
          <div className="bottom-sheet-grab-slider" data-testid="grab-slider" />
          <div className="bottom-sheet-text-and-button-wrapper">
            <div className="bottom-sheet-text-content-wrapper">
              <div className="bottom-sheet-heading-and-paragraph">
                <div className="bottom-sheet-header-section-wrapper">
                  <div className="bottom-sheet-header">
                    <h2 className="bottom-sheet-heading">{headingText}</h2>
                    <div className="bottom-sheet-close-icon" data-testid="close-button">
                      <CloseCircle size={24} />
                    </div>
                  </div>
                </div>
                <p className="bottom-sheet-paragraph">{paragraphText}</p>
              </div>
            </div>
            <Button variant="filled" size="large" label={buttonLabel} onClick={onButtonClick}></Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
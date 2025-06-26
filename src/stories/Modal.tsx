import "./modal.css"; 
import { Button } from "./Button"; 
export interface ModalProps {
  headingText?: string;
  paragraphText?: string;
}
export default function Modal({
  headingText = "Heading",
  paragraphText = "Paragraph",
}: ModalProps) {
  return (
    <div className="modal-container" data-name=".modal" data-testid="modal">
      <div className="modal-inner-flex">
        <div className="modal-content-flex">
          <div className="modal-wrapper" data-name="wrapper" data-testid="modal-wrapper">
            <div className="modal-heading-wrapper">
              <div className="modal-heading">
                <p className="block leading-[24px]">{headingText}</p>
              </div>
              <div className="modal-paragraph-wrapper">
                <p className="block leading-[21px]">{paragraphText}</p>
              </div>
            </div>
          </div>
          <div className="modal-button-group" data-name="wrapper">
            <div className="modal-button-group-inner-flex">
              <Button label="Button" />
              <Button label="Button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
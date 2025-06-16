import './Menu.css';
import { InfoCircle } from "@solar-icons/react";

export default function Menu({ onMenuItemClick }: { onMenuItemClick?: () => void }) {
  return (
    <div
      className="menu"
      data-name=".menu"
      id="node-562_25755"
    >
      <div className="menu-content">
        <div className="box-border content-stretch flex flex-col gap-7 items-center justify-start overflow-clip p-[16px] relative size-full">
          <div
            className="menu-item-wrapper"
            data-name="wrapper"
            id="node-562_25715"
          >
            <div className="menu-item-content">
              <div
                className="menu-item-wrapper"
                data-name="wrapper"
                id="node-562_25733"
              >
                <div className="menu-item-row">
                  <div className="menu-item-inner-row" onClick={onMenuItemClick} tabIndex={0}>
                    <div
                      className="menu-item-icon"
                      data-name="Outline / Essentional, UI / Info Circle"
                      id="node-746_572"
                    >
                      <InfoCircle size={16} color="currentColor" />
                    </div>
                    <div
                      className="menu-item-text"
                      id="node-562_25732"
                    >
                      <p className="block leading-[21px] whitespace-pre">
                        Paragraph
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="menu-item-wrapper"
                data-name="wrapper"
                id="node-562_25743"
              >
                <div className="menu-item-row">
                  <div className="menu-item-inner-row" onClick={onMenuItemClick} tabIndex={0}>
                    <div
                      className="menu-item-icon"
                      data-name="Outline / Essentional, UI / Info Circle"
                      id="node-746_575"
                    >
                      <InfoCircle size={16} color="currentColor" />
                    </div>
                    <div
                      className="menu-item-text"
                      id="node-562_25745"
                    >
                      <p className="block leading-[21px] whitespace-pre">
                        Paragraph
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="menu-item-wrapper"
                data-name="wrapper"
                id="node-562_25749"
              >
                <div className="menu-item-row">
                  <div className="menu-item-inner-row" onClick={onMenuItemClick} tabIndex={0}>
                    <div
                      className="menu-item-icon"
                      data-name="Outline / Essentional, UI / Info Circle"
                      id="node-746_578"
                    >
                      <InfoCircle size={16} color="currentColor" />
                    </div>
                    <div
                      className="menu-item-text"
                      id="node-562_25751"
                    >
                      <p className="block leading-[21px] whitespace-pre">
                        Paragraph
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
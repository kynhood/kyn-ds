import React from "react";
// import clsx from "clsx"; // Removed as Figma code uses inline Tailwind
import "./bottomSheet.css";
// import { Button } from "./Button"; // Removed as Figma code embeds button directly

// Removed as Figma code doesn't use these props directly
// interface BottomSheetProps {
//   headingText?: string;
//   paragraphText?: string;
//   buttonLabel?: string;
//   onButtonClick?: () => void;
// }

// Removed BottomSheetHelper as it's not present in Figma code
// function BottomSheetHelper({
//   children,
// }: React.PropsWithChildren<{}>) {
//   return (
//     <div className="bottom-sheet-helper-icon">
//       <div className="absolute inset-[5.208%]" data-name="vector">
//         <svg
//           className="block size-full"
//           fill="none"
//           preserveAspectRatio="none"
//           viewBox="0 0 22 22"
//         >
//           {children}
//         </svg>
//       </div>
//     </div>
//   );
// }

export default function BottomSheet(
  // Removed props as Figma code hardcodes values
  // {
  // headingText = "Heading",
  // paragraphText = "Paragraph",
  // buttonLabel = "Button",
  // onButtonClick,
  // }: BottomSheetProps
) {
  // Removed bannerClass as Figma code uses inline Tailwind
  // const bannerClass = clsx(
  //   "banner-container",
  //   {
  //     "banner-error": type === "error",
  //     "banner-warning": type === "warning",
  //     "banner-success": type === "success",
  //     "banner-info": type === "info",
  //   }
  // );

  return (
    <div
      className="bg-[#fdfdfd] relative rounded-tl-[28px] rounded-tr-[28px] shadow-[0px_-12px_20px_0px_#eaeaea] size-full"
      data-name=".bottom-sheet"
      data-testid="bottom-sheet"
      id="node-562_25681"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start overflow-clip pb-6 pt-3 px-6 relative size-full">
          <div
            className="bg-[#bebebe] h-1 rounded-[100px] shrink-0 w-16"
            data-name="grab-slider"
            data-testid="grab-slider"
            id="node-562_25653"
          />
          <div
            className="relative shrink-0 w-full"
            data-name="wrapper"
            id="node-562_25650"
          >
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
              <div
                className="relative shrink-0 w-full"
                data-name="wrapper"
                id="node-562_25601"
              >
                <div className="box-border content-stretch flex flex-row gap-8 items-center justify-center p-0 relative w-full">
                  <div
                    className="basis-0 font-['Manrope:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#151515] text-[20px] text-left"
                    id="node-562_25602"
                  >
                    <p className="block leading-[24px]">Heading</p>
                  </div>
                  <div
                    className="overflow-clip relative shrink-0 size-6"
                    data-name="Outline / Essentional, UI / Close Circle"
                    data-testid="close-button"
                    id="node-746_581"
                  >
                    <div
                      className="absolute inset-[5.208%]"
                      data-name="vector"
                      id="node-I746_581-745_13089"
                    >
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 22 22"
                      >
                        <g id="vector">
                          <path
                            d="M8.7803 7.71965C8.48741 7.42676 8.01253 7.42676 7.71964 7.71965C7.42675 8.01255 7.42675 8.48742 7.71964 8.78031L9.68932 10.75L7.71966 12.7197C7.42677 13.0125 7.42677 13.4874 7.71966 13.7803C8.01255 14.0732 8.48743 14.0732 8.78032 13.7803L10.75 11.8107L12.7196 13.7803C13.0125 14.0732 13.4874 14.0732 13.7803 13.7803C14.0732 13.4874 14.0732 13.0125 13.7803 12.7196L11.8106 10.75L13.7803 8.78033C14.0732 8.48744 14.0732 8.01257 13.7803 7.71968C13.4874 7.42678 13.0125 7.42678 12.7196 7.71968L10.75 9.68933L8.7803 7.71965Z"
                            fill="var(--fill-0, #2E2E2E)"
                          />
                          <path
                            clipRule="evenodd"
                            d="M10.75 0C4.81294 0 0 4.81294 0 10.75C0 16.6871 4.81294 21.5 10.75 21.5C16.6871 21.5 21.5 16.6871 21.5 10.75C21.5 4.81294 16.6871 0 10.75 0ZM1.5 10.75C1.5 5.64137 5.64137 1.5 10.75 1.5C15.8586 1.5 20 5.64137 20 10.75C20 15.8586 15.8586 20 10.75 20C5.64137 20 1.5 15.8586 1.5 10.75Z"
                            fill="var(--fill-0, #2E2E2E)"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#151515] text-[16px] text-left w-full"
                id="node-562_25580"
              >
                <p className="block leading-[24px]">Paragraph</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#ffd43d] relative rounded-[100px] shrink-0 w-full"
            data-name=".button"
            data-testid="action-button"
            id="node-562_25669"
          >
            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-8 py-4 relative w-full">
                <div
                  className="overflow-clip relative shrink-0 size-6"
                  data-name="Outline / Astronomy / Earth"
                  id="node-I562_25669-540_24229"
                >
                  <div
                    className="absolute inset-[5.208%]"
                    data-name="vector"
                    id="node-I562_25669-540_24229-745_13729"
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 22 22"
                    >
                      <path
                        clipRule="evenodd"
                        d="M4.32801 4.09262C2.58444 5.77492 1.5 8.13582 1.5 10.75C1.5 15.8586 5.64137 20 10.75 20C10.8775 20 11.0044 19.9974 11.1307 19.9923C10.9252 19.0807 10.8974 17.8551 11.524 16.6743C12.1761 15.4455 13.5262 14.9122 14.5189 14.6682C15.039 14.5404 15.5208 14.4773 15.8711 14.4459C16.0472 14.4301 16.1923 14.4221 16.2952 14.418C16.3467 14.416 16.3877 14.4149 16.417 14.4144L16.4519 14.4139L16.4604 14.4138C18.1329 14.3964 18.8864 13.8525 19.2863 13.3336C19.6279 12.8904 19.7569 12.4471 19.8877 11.9975C19.9043 11.9403 19.921 11.883 19.9381 11.8256C19.979 11.4727 20 11.1138 20 10.75C20 8.22592 18.989 5.93797 17.3499 4.26898C17.3412 4.30304 17.3323 4.3366 17.3232 4.3696C17.1604 4.96256 16.8975 5.57114 16.6118 6.00475C16.3559 6.39313 15.8595 6.78492 15.4475 7.08094C15.1763 7.27578 14.894 7.4413 14.6379 7.58888C14.607 7.60672 14.5765 7.62428 14.5463 7.6416C14.3183 7.77278 14.1131 7.89077 13.9156 8.02123C13.4838 8.30655 13.1497 8.61363 12.9248 9.07729C12.8461 9.23966 12.8436 9.39808 12.8902 9.56769C12.9648 9.83921 13.0156 10.1446 13.0164 10.456C13.0181 11.105 12.6875 11.6317 12.2626 11.9741C11.8428 12.3125 11.2941 12.506 10.7418 12.5C8.28653 12.4731 6.77692 10.4806 6.57782 8.26448C6.49861 7.38293 6.11212 6.49121 5.62411 5.71185C5.17593 4.9961 4.67094 4.42095 4.32801 4.09262ZM5.49505 3.13662C5.9101 3.55462 6.43084 4.17381 6.89544 4.91579C7.45296 5.80616 7.96374 6.92759 8.0718 8.13025C8.22276 9.81051 9.28489 10.984 10.7582 11C10.9608 11.0023 11.1712 10.9272 11.3214 10.8062C11.4665 10.6893 11.5167 10.5658 11.5164 10.4599C11.516 10.3044 11.4898 10.1325 11.4437 9.96483C11.3226 9.52357 11.3053 8.97925 11.5752 8.42271C11.9602 7.62891 12.5308 7.13838 13.0888 6.76971C13.3279 6.61171 13.576 6.46918 13.7998 6.34055C13.83 6.32322 13.8597 6.30613 13.8889 6.2893C14.1441 6.14218 14.3682 6.00939 14.5722 5.86277C15.0033 5.55305 15.276 5.30581 15.3592 5.17947C15.5417 4.90255 15.7469 4.44533 15.8767 3.9725C15.9796 3.59787 16.0081 3.31036 15.9985 3.13216C14.5073 2.10281 12.699 1.5 10.75 1.5C8.79814 1.5 6.98748 2.10455 5.49505 3.13662ZM21.4292 11.9903C21.476 11.5833 21.5 11.1695 21.5 10.75C21.5 4.81294 16.6871 0 10.75 0C4.81294 0 0 4.81294 0 10.75C0 16.6871 4.81294 21.5 10.75 21.5C16.2104 21.5 20.7199 17.4289 21.4088 12.1564C21.4271 12.0929 21.4429 12.04 21.4571 12.0001L21.4292 11.9903ZM18.6547 15.5566C18.0591 15.7749 17.3412 15.9047 16.4761 15.9138L16.4682 15.9138V15.9138L16.4656 15.9138L16.445 15.9141C16.4255 15.9145 16.3949 15.9152 16.3544 15.9168C16.2733 15.9201 16.1534 15.9266 16.0052 15.9399C15.7071 15.9666 15.3037 16.02 14.8769 16.1249C13.9757 16.3464 13.185 16.7442 12.849 17.3774C12.3935 18.2357 12.4585 19.1696 12.6284 19.8092C15.1774 19.2834 17.3431 17.7089 18.6547 15.5566Z"
                        fill="var(--fill-0, #2E2E2E)"
                        fillRule="evenodd"
                        id="vector"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#2e2e2e] text-[20px] text-center text-nowrap"
                  id="node-I562_25669-532_346"
                >
                  <p className="block leading-[24px] whitespace-pre">Button</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
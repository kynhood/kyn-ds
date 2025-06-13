import { render, screen } from '@testing-library/react';
import BottomSheet from './BottomSheet';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('BottomSheet', () => {
  it('renders with default heading, paragraph, and button label', () => {
    render(<BottomSheet />);

    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(screen.getByTestId('grab-slider')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  it('renders with custom heading, paragraph, and button label', () => {
    const customHeading = 'Custom Heading';
    const customParagraph = 'Custom paragraph text.';
    const customButtonLabel = 'Custom Action';

    render(
      <BottomSheet
        headingText={customHeading}
        paragraphText={customParagraph}
        buttonLabel={customButtonLabel}
      />
    );

    expect(screen.getByText(customHeading)).toBeInTheDocument();
    expect(screen.getByText(customParagraph)).toBeInTheDocument();
    expect(screen.getByText(customButtonLabel)).toBeInTheDocument();
  });

  it('calls onButtonClick when the action button is clicked', async () => {
    const handleButtonClick = vi.fn();
    render(<BottomSheet onButtonClick={handleButtonClick} />);

    const actionButton = screen.getByTestId('action-button');
    await userEvent.click(actionButton);

    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
}); 
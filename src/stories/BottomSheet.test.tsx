import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BottomSheet from './BottomSheet';

describe('BottomSheet Component', () => {
  it('renders bottom sheet with correct structure', () => {
    render(<BottomSheet />);
    const bottomSheet = screen.getByTestId('bottom-sheet');
    expect(bottomSheet).toBeInTheDocument();
  });

  it('renders grab slider', () => {
    render(<BottomSheet />);
    const grabSlider = screen.getByTestId('grab-slider');
    expect(grabSlider).toBeInTheDocument();
    expect(grabSlider).toHaveClass('bg-[#bebebe]');
  });

  it('renders heading with correct styles', () => {
    render(<BottomSheet />);
    const heading = screen.getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('text-[20px]');
  });

  it('renders paragraph with correct styles', () => {
    render(<BottomSheet />);
    const paragraph = screen.getByText('Paragraph');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('font-normal');
    expect(paragraph).toHaveClass('text-[16px]');
  });

  it('renders close button', () => {
    render(<BottomSheet />);
    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders action button with correct styles', () => {
    render(<BottomSheet />);
    const actionButton = screen.getByTestId('action-button');
    expect(actionButton).toBeInTheDocument();
    expect(actionButton).toHaveClass('bg-[#ffd43d]');
    expect(actionButton).toHaveClass('rounded-[100px]');
  });

  it('renders action button with icon', () => {
    render(<BottomSheet />);
    const actionButton = screen.getByTestId('action-button');
    const icon = actionButton.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('has correct border radius on container', () => {
    render(<BottomSheet />);
    const bottomSheet = screen.getByTestId('bottom-sheet');
    expect(bottomSheet).toHaveClass('rounded-tl-[28px]');
    expect(bottomSheet).toHaveClass('rounded-tr-[28px]');
  });

  it('has correct shadow on container', () => {
    render(<BottomSheet />);
    const bottomSheet = screen.getByTestId('bottom-sheet');
    expect(bottomSheet).toHaveClass('shadow-[0px_-12px_20px_0px_#eaeaea]');
  });
}); 
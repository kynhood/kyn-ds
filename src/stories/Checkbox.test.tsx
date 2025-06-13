import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders checkbox without label', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('handles initial checked state', () => {
    render(<Checkbox initialChecked={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox.closest('label')).toHaveClass('checkbox-disabled');
  });

  it('handles error state', () => {
    render(<Checkbox error />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(checkbox.closest('label')).toHaveClass('checkbox-error');
  });

  it('handles indeterminate state', () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
    expect(checkbox.closest('label')).toHaveClass('checkbox-indeterminate');
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Checkbox disabled onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('updates checked state when initialChecked changes', () => {
    const { rerender } = render(<Checkbox initialChecked={false} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox initialChecked={true} />);
    expect(checkbox).toBeChecked();
  });

  it('applies correct styles when checked', () => {
    render(<Checkbox initialChecked={true} />);
    const label = screen.getByRole('checkbox').closest('label');
    expect(label).toHaveClass('checkbox-checked');
  });
}); 
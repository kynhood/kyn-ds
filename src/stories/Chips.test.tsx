import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Chips from './Chips';

describe('Chips Component', () => {
  it('renders chips with label', () => {
    render(<Chips label="Test Chip" />);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('toggles selection on click', () => {
    render(<Chips label="Clickable Chip" />);
    const chip = screen.getByRole('button', { name: 'Clickable Chip' });
    
    // Initially not selected
    expect(chip).toHaveClass('chips-inactive');
    expect(chip).not.toHaveClass('chips-active');

    // Click to select
    fireEvent.click(chip);
    expect(chip).toHaveClass('chips-active');
    expect(chip).not.toHaveClass('chips-inactive');

    // Click again to deselect
    fireEvent.click(chip);
    expect(chip).toHaveClass('chips-inactive');
    expect(chip).not.toHaveClass('chips-active');
  });

  it('does not toggle selection when disabled', () => {
    render(<Chips label="Disabled Chip" disabled />);
    const chip = screen.getByRole('button', { name: 'Disabled Chip' });

    expect(chip).toHaveClass('chips-disabled');
    expect(chip).toHaveAttribute('aria-disabled', 'true');
    expect(chip).not.toHaveClass('chips-active');
    expect(chip).not.toHaveClass('chips-inactive');

    fireEvent.click(chip);
    // Should remain in disabled state, not active or inactive
    expect(chip).toHaveClass('chips-disabled');
    expect(chip).not.toHaveClass('chips-active');
    expect(chip).not.toHaveClass('chips-inactive');
  });

  it('applies chips-disabled class when disabled prop is true', () => {
    render(<Chips label="Disabled Chip" disabled />);
    const chip = screen.getByRole('button', { name: 'Disabled Chip' });
    expect(chip).toHaveClass('chips-disabled');
  });

  it('has role="button"', () => {
    render(<Chips label="Role Button Chip" />);
    const chip = screen.getByText('Role Button Chip');
    expect(chip).toHaveAttribute('role', 'button');
  });
}); 
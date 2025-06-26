import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
describe('Badge Component', () => {
  it('renders badge with correct label', () => {
    render(<Badge label="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });
  it('applies error type styles', () => {
    render(<Badge type="error" label="Error Badge" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('badge-error');
  });
  it('applies warning type styles', () => {
    render(<Badge type="warning" label="Warning Badge" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('badge-warning');
  });
  it('applies success type styles', () => {
    render(<Badge type="success" label="Success Badge" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('badge-success');
  });
  it('applies info type styles', () => {
    render(<Badge type="info" label="Info Badge" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('badge-info');
  });
  it('renders correct icon for error type', () => {
    render(<Badge type="error" label="Error Badge" />);
    const icon = screen.getByRole('status').querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });
  it('renders correct icon for warning type', () => {
    render(<Badge type="warning" label="Warning Badge" />);
    const icon = screen.getByRole('status').querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });
  it('renders correct icon for success type', () => {
    render(<Badge type="success" label="Success Badge" />);
    const icon = screen.getByRole('status').querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });
  it('renders correct icon for info type', () => {
    render(<Badge type="info" label="Info Badge" />);
    const icon = screen.getByRole('status').querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });
  it('has correct ARIA attributes', () => {
    const label = 'Accessible Badge';
    render(<Badge label={label} />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveAttribute('aria-label', label);
  });
}); 
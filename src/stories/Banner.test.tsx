import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  it('renders banner with correct message', () => {
    render(<Banner message="Test message" />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('applies error type styles', () => {
    render(<Banner type="error" message="Error message" />);
    const banner = screen.getByRole('status');
    expect(banner).toHaveClass('banner-error');
  });

  it('applies warning type styles', () => {
    render(<Banner type="warning" message="Warning message" />);
    const banner = screen.getByRole('status');
    expect(banner).toHaveClass('banner-warning');
  });

  it('applies success type styles', () => {
    render(<Banner type="success" message="Success message" />);
    const banner = screen.getByRole('status');
    expect(banner).toHaveClass('banner-success');
  });

  it('applies info type styles', () => {
    render(<Banner type="info" message="Info message" />);
    const banner = screen.getByRole('status');
    expect(banner).toHaveClass('banner-info');
  });

  it('renders multiline messages correctly', () => {
    const multilineMessage = 'Line 1\nLine 2\nLine 3';
    render(<Banner message={multilineMessage} />);
    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
    expect(screen.getByText('Line 3')).toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    const message = 'Accessible message';
    render(<Banner message={message} />);
    const banner = screen.getByRole('status');
    expect(banner).toHaveAttribute('aria-label', message);
  });
}); 
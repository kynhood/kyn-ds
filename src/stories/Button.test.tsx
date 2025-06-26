import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
describe('Button Component', () => {
  it('renders button with correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  it('applies primary theme styles', () => {
    render(<Button label="Primary Button" theme="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--primary');
  });
  it('applies accent theme styles', () => {
    render(<Button label="Accent Button" theme="accent" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--accent');
  });
  it('applies blur theme styles', () => {
    render(<Button label="Blur Button" theme="blur" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--blur');
  });
  it('applies filled variant styles', () => {
    render(<Button label="Filled Button" variant="filled" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--filled');
  });
  it('applies outline variant styles', () => {
    render(<Button label="Outline Button" variant="outline" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--outline');
  });
  it('applies text variant styles', () => {
    render(<Button label="Text Button" variant="text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--text');
  });
  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('disables button when disabled prop is true', () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
  it('shows leading icon by default', () => {
    render(<Button label="Button with Icon" />);
    expect(screen.getByRole('button').querySelector('.storybook-button__icon')).toBeInTheDocument();
  });
  it('hides leading icon when leadingIcon is false', () => {
    render(<Button label="Button without Icon" leadingIcon={false} />);
    expect(screen.getByRole('button').querySelector('.storybook-button__icon')).not.toBeInTheDocument();
  });
  it('shows trailing icon when trailingIcon is true', () => {
    render(<Button label="Button with Trailing Icon" trailingIcon />);
    const icons = screen.getByRole('button').querySelectorAll('.storybook-button__icon');
    expect(icons).toHaveLength(2); 
  });
  it('applies correct size styles', () => {
    render(<Button label="Large Button" size="large" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--large');
  });
  it('applies accent color styles', () => {
    render(<Button label="Blue Accent Button" theme="accent" color="blue" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--accent--blue');
  });
}); 
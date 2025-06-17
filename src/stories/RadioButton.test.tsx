/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders inactive active state correctly', () => {
    render(<RadioButton category="inactive" state="active" />);
    const circle = screen.getByRole('img').querySelector('circle');
    expect(circle).toHaveAttribute('stroke', 'var(--color-neutral-color-dark-dark-200)');
    expect(circle).toHaveAttribute('stroke-width', '3');
    expect(circle).toHaveAttribute('r', '8.5');
  });

  it('renders inactive disabled state correctly', () => {
    render(<RadioButton category="inactive" state="disabled" />);
    const circle = screen.getByRole('img').querySelector('circle');
    expect(circle).toHaveAttribute('stroke', 'var(--color-neutral-color-dark-dark-50)');
    expect(circle).toHaveAttribute('stroke-width', '3');
    expect(circle).toHaveAttribute('r', '8.5');
  });

  it('renders active active state correctly', () => {
    render(<RadioButton category="active" state="active" />);
    const circle = screen.getByRole('img').querySelector('circle');
    expect(circle).toHaveAttribute('stroke', 'var(--color-accent-color-blue-blue-500)');
    expect(circle).toHaveAttribute('stroke-width', '6');
    expect(circle).toHaveAttribute('r', '7');
  });

  it('renders active disabled state correctly', () => {
    render(<RadioButton category="active" state="disabled" />);
    const circle = screen.getByRole('img').querySelector('circle');
    expect(circle).toHaveAttribute('stroke', 'var(--color-accent-color-blue-blue-200)');
    expect(circle).toHaveAttribute('stroke-width', '6');
    expect(circle).toHaveAttribute('r', '7');
  });

  it('renders error active state correctly', () => {
    render(<RadioButton category="error" state="active" />);
    const circle = screen.getByRole('img').querySelector('circle');
    expect(circle).toHaveAttribute('stroke', 'var(--color-accent-color-red-red-500)');
    expect(circle).toHaveAttribute('stroke-width', '3');
    expect(circle).toHaveAttribute('r', '8.5');
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<RadioButton onChange={handleChange} />);
    const input = screen.getByRole('radio');
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from './Avatar';
describe('Avatar Component', () => {
  test('renders with default size', () => {
    render(<Avatar />);
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('avatar-medium');
  });
  test('renders small size correctly', () => {
    render(<Avatar size="small" />);
    expect(screen.getByTestId('avatar-component')).toHaveClass('avatar-small');
  });
  test('renders medium size correctly', () => {
    render(<Avatar size="medium" />);
    expect(screen.getByTestId('avatar-component')).toHaveClass('avatar-medium');
  });
  test('renders large size correctly', () => {
    render(<Avatar size="large" />);
    expect(screen.getByTestId('avatar-component')).toHaveClass('avatar-large');
  });
  test('renders extra-large size correctly', () => {
    render(<Avatar size="extra-large" />);
    expect(screen.getByTestId('avatar-component')).toHaveClass('avatar-extra-large');
  });
  test('accepts custom className', () => {
    render(<Avatar className="custom-class" />);
    expect(screen.getByTestId('avatar-component')).toHaveClass('custom-class');
  });
  test('matches snapshot', () => {
    const { container } = render(<Avatar size="large" className="custom-class" />);
    expect(container).toMatchSnapshot();
  });
});
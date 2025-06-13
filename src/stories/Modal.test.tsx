import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('renders modal with default heading and paragraph', () => {
    render(<Modal />);
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  it('renders modal with custom heading and paragraph', () => {
    render(
      <Modal 
        headingText="Custom Heading" 
        paragraphText="Custom Paragraph" 
      />
    );
    expect(screen.getByText('Custom Heading')).toBeInTheDocument();
    expect(screen.getByText('Custom Paragraph')).toBeInTheDocument();
  });

  it('renders two buttons in the button group', () => {
    render(<Modal />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('has correct data attributes', () => {
    render(<Modal />);
    expect(screen.getByTestId('modal')).toHaveAttribute('data-name', '.modal');
    expect(screen.getByTestId('modal-wrapper')).toHaveAttribute('data-name', 'wrapper');
  });

  it('applies correct CSS classes', () => {
    render(<Modal />);
    const modal = screen.getByTestId('modal');
    expect(modal).toHaveClass('modal-container');
    expect(modal.querySelector('.modal-inner-flex')).toBeInTheDocument();
    expect(modal.querySelector('.modal-content-flex')).toBeInTheDocument();
  });

  it('renders heading with correct line height', () => {
    render(<Modal />);
    const heading = screen.getByText('Heading');
    expect(heading).toHaveClass('leading-[24px]');
  });

  it('renders paragraph with correct line height', () => {
    render(<Modal />);
    const paragraph = screen.getByText('Paragraph');
    expect(paragraph).toHaveClass('leading-[21px]');
  });
}); 
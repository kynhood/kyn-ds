import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Menu', () => {
  it('renders the menu with default paragraphs', () => {
    render(<Menu />);

    const paragraphs = screen.getAllByText('Paragraph');
    expect(paragraphs.length).toBe(3);
    paragraphs.forEach(p => expect(p).toBeInTheDocument());
  });

  it('calls onMenuItemClick when a menu item is clicked', async () => {
    const handleClick = vi.fn();
    render(<Menu onMenuItemClick={handleClick} />);

    const menuItems = screen.getAllByText('Paragraph');
    // Click the first menu item
    await userEvent.click(menuItems[0].closest('.menu-item-inner-row') as HTMLElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 
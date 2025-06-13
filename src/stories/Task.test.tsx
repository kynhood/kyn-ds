import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Task } from './Task';

describe('Task Component', () => {
  it('renders task heading', () => {
    render(<Task />);
    expect(screen.getByRole('heading', { level: 6, name: 'Task' })).toBeInTheDocument();
  });
}); 
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Page } from './Page';

describe('Page Component', () => {
  it('renders header and main content', () => {
    render(<Page />);
    // Check for Header elements
    expect(screen.getByText('Acme')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();

    // Check for main page content elements
    expect(screen.getByRole('heading', { level: 2, name: 'Pages in Storybook' })).toBeInTheDocument();
    expect(screen.getByText(/component-driven/i)).toBeInTheDocument();
    expect(screen.getByText(/Storybook tutorials/i)).toBeInTheDocument();
    expect(screen.getByText('docs')).toBeInTheDocument();
  });

  it('logs in a user when the Log in button is clicked', async () => {
    render(<Page />);
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/Welcome, Jane Doe!/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });
  });

  it('logs out a user when the Log out button is clicked', async () => {
    render(<Page />);
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    // Log in first
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByText(/Welcome, Jane Doe!/i)).toBeInTheDocument();
    });

    const logoutButton = screen.getByRole('button', { name: 'Log out' });
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(screen.queryByText(/Welcome,/i)).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
    });
  });

  it('creates an account for a user when the Sign up button is clicked', async () => {
    render(<Page />);
    const signUpButton = screen.getByRole('button', { name: 'Sign up' });

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(screen.getByText(/Welcome, Jane Doe!/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });
  });
}); 
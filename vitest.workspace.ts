import { defineWorkspace } from 'vitest/config';

// Configure Vitest to run tests in the src directory
export default defineWorkspace([
  {
    test: {
      name: 'unit',
      include: ['src/**/*.test.{ts,tsx}'],
      environment: 'jsdom',
      globals: true,
      setupFiles: ['vitest-setup.ts'],
    },
  },
]);

import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders link to homepage', () => {
  render(<Footer />);
  const link = screen.getByRole('link', {
    name: 'Zsolt Pentz'
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', 'https://pentzzsolt.github.io');
});

test('renders link to issues', () => {
  render(<Footer />);
  const link = screen.getByRole('link', {
    name: 'Report an issue'
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', 'https://github.com/pentzzsolt/very-good-metronome/issues');
});

test('renders link to discussions', () => {
  render(<Footer />);
  const link = screen.getByRole('link', {
    name: 'Start a discussion'
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', 'https://github.com/pentzzsolt/very-good-metronome/discussions');
});

test('renders link to support page', () => {
  render(<Footer />);
  const link = screen.getByRole('link', {
    name: 'Support this project'
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', 'https://www.buymeacoffee.com/pentzzsolt');
});

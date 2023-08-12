import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

const cases = [
  {
    case: "homepage",
    href: "https://pentzzsolt.github.io",
    name: "Zsolt Pentz"
  },
  {
    case: "issues",
    href: "https://github.com/pentzzsolt/very-good-metronome/issues",
    name: "Report an issue"
  },
  {
    case: "discussions",
    href: "https://github.com/pentzzsolt/very-good-metronome/discussions",
    name: "Start a discussion"
  },
  {
    case: "support page",
    href: "https://www.buymeacoffee.com/pentzzsolt",
    name: "Support this project"
  },
]

/**
 * This test is redundant: it tests the implementation details of the Link
 * component. Instead, we should mock the Link component and test if our mock
 * component is getting passed the correct parameters.
 */
test.each(cases)("renders link to $case", ({ href, name }) => {
  render(<Footer />);
  const link = screen.getByRole('link', {
    name: name
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', href);
})

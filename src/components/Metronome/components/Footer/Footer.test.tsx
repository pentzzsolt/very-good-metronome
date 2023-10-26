import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const testCases = [
  {
    href: "https://pentzzsolt.github.io",
    name: "Zsolt Pentz",
    testCase: "homepage",
  },
  {
    href: "https://github.com/pentzzsolt/very-good-metronome/issues",
    name: "Report an issue",
    testCase: "issues",
  },
  {
    href: "https://github.com/pentzzsolt/very-good-metronome/discussions",
    name: "Start a discussion",
    testCase: "discussions",
  },
  {
    href: "https://www.buymeacoffee.com/pentzzsolt",
    name: "Support this project",
    testCase: "support page",
  },
]

/**
 * This test is redundant: it tests the implementation details of the Link
 * component. Instead, we should mock the Link component and test if our mock
 * component is getting passed the correct parameters.
 */
test.each(testCases)("renders link to $testCase", ({ href, name }) => {
  render(<Footer />);
  const link = screen.getByRole("link", {
    name: name
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute("href", href);
})

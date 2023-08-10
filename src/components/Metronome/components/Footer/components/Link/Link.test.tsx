import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

const dummyChild = "Hey, I am a dummy child";
const dummyHref = "https://google.com";

test("renders link", () => {
  render(<Link href={dummyHref}>{ dummyChild }</Link>);
  const link = screen.getByRole("link", {
    name: dummyChild
  });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute("href", dummyHref);
});

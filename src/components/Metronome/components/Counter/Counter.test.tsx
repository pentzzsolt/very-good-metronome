import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

const dummyCount = "2";

test("renders the count passed as children", () => {
  render(<Counter>{dummyCount}</Counter>);
  expect(screen.getByText(dummyCount)).toBeVisible();
});

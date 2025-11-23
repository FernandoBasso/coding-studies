import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Header } from "./Header.tsx";

test("it works", () => {
  const { getByRole } = render(<Header title="Hello!" />);

  expect(getByRole("heading", { name: /hello/i })).toBeInTheDocument();
});

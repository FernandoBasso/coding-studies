import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { HeaderItem } from "./HeaderItem.tsx";

describe("<HeaderItem />", () => {
  it("renders with correct passed-in props", () => {
    const { getByRole } = render(<HeaderItem text="About" />);

    const listItem = getByRole('listitem');

    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent(/about/i)
  });
});

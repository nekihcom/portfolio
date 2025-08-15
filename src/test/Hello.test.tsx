import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hello } from "@/components/test/Hello";

describe("Hello component", () => {
  it("renders with given name", () => {
    render(<Hello name="Mochiken" />);
    expect(screen.getByText("Hello, Mochiken!")).toBeInTheDocument();
  });
});

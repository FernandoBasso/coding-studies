import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter.ts";

describe("useCounter()", () => {
  it("should create a zero-valued counter", () => {
    const {
      result: {
        current: { count },
      },
    } = renderHook(() => useCounter());

    expect(count).toEqual(0);
  });

  it("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(2);
  });
});

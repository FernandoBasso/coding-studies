import { Stack } from "./stack";

describe("Stack", () => {
  it("can construct and empty stack", () => {
    const stack = new Stack<number>();

    expect(stack.size()).toBe(0);
  });

  describe("push()", () => {
    it("push to an empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);

      expect(stack.size()).toBe(1);
    });

    it("push to a non-empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);
      stack.push(111);

      expect(stack.size()).toBe(3);
    });
  });

  describe("pop()", () => {
    it("pop from an empty stack", () => {
      const stack = new Stack<number>();

      expect(stack.pop()).toBe(null);
    });

    it("pop from a non-empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);

      const topVal: number | null = stack.pop();

      expect(topVal).toBe(90);
      expect(stack.size()).toBe(1);
    });

    it("pop the stack empty", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);
      stack.push(110);

      expect(stack.pop()).toBe(110);
      expect(stack.size()).toBe(2);

      expect(stack.pop()).toBe(90);
      expect(stack.size()).toBe(1);

      expect(stack.pop()).toBe(40);
      expect(stack.size()).toBe(0);

      expect(stack.pop()).toBe(null);
      expect(stack.size()).toBe(0);
    });
  });

  describe("peek()", () => {
    it("peek an empty stack", () => {
      const stack = new Stack<number>();

      expect(stack.peek()).toBe(null);
    });

    it("peek a non-empty stack", () => {
      const stack = new Stack<number>();

      stack.push(40);
      stack.push(90);

      expect(stack.peek()).toBe(90);
    });
  });

  describe("size()", () => {
    const stack = new Stack<number>();

    expect(stack.size()).toBe(0);

    stack.push(10);
    stack.push(20);

    expect(stack.size()).toBe(2);
  });

  describe("isEmpty()", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty()).toBe(true);

    stack.push(10);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});

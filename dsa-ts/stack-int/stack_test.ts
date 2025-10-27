import { assertEquals } from "@std/assert";
import { Stack } from "./stack.ts";

Deno.test("Stack", async (t) => {
  await t.step("can construct and empty stack", () => {
    const stack = new Stack<number>();

    assertEquals(stack.size(), 0);
  });

  await t.step("push()", async (t) => {
    await t.step("push to an empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);

      assertEquals(stack.size(), 1);
    });

    await t.step("push to a non-empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);
      stack.push(111);

      assertEquals(stack.size(), 3);
    });
  });

  await t.step("pop()", async (t) => {
    await t.step("pop from an empty stack", () => {
      const stack = new Stack<number>();

      assertEquals(stack.pop(), null);
    });

    await t.step("pop from a non-empty stack", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);

      const topVal: number | null = stack.pop();

      assertEquals(topVal, 90);
      assertEquals(stack.size(), 1);
    });

    await t.step("pop the stack empty", () => {
      const stack = new Stack<number>();
      stack.push(40);
      stack.push(90);
      stack.push(110);

      assertEquals(stack.pop(), 110);
      assertEquals(stack.size(), 2);

      assertEquals(stack.pop(), 90);
      assertEquals(stack.size(), 1);

      assertEquals(stack.pop(), 40);
      assertEquals(stack.size(), 0);

      assertEquals(stack.pop(), null);
      assertEquals(stack.size(), 0);
    });
  });

  await t.step("peek()", async (t) => {
    await t.step("peek an empty stack", () => {
      const stack = new Stack<number>();

      assertEquals(stack.peek(), null);
    });

    await t.step("peek a non-empty stack", () => {
      const stack = new Stack<number>();

      stack.push(40);
      stack.push(90);

      assertEquals(stack.peek(), 90);
    });
  });

  await t.step("size()", () => {
    const stack = new Stack<number>();

    assertEquals(stack.size(), 0);

    stack.push(10);
    stack.push(20);

    assertEquals(stack.size(), 2);
  });

  await t.step("isEmpty()", () => {
    const stack = new Stack<number>();

    assertEquals(stack.isEmpty(), true);

    stack.push(10);
    assertEquals(stack.isEmpty(), false);

    stack.pop();
    assertEquals(stack.isEmpty(), true);
  });
});

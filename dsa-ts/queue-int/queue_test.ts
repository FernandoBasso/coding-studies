import { assertEquals } from "@std/assert";
import { Queue } from "./queue.ts";

Deno.test("Queue<T>", async (t) => {
  await t.step("constructor()", async (t) => {
    await t.step("can construct an empty queue of a given type", () => {
      const q = new Queue<number>();

      assertEquals(q.length, 0);
    });
  });

  await t.step("enqueue()", async (t) => {
    await t.step("to an empty queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);

      assertEquals(q.length, 1);
      assertEquals(q.peek(), 10);
    });

    await t.step("to a non-empy queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);
      q.enqueue(30);

      assertEquals(q.length, 3);
      assertEquals(q.peek(), 10);
    });
  });

  await t.step("dequeue()", async (t) => {
    await t.step("can return the head", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);
      q.enqueue(30);

      assertEquals(q.dequeue(), 10);
      assertEquals(q.length, 2);

      assertEquals(q.peek(), 20);

      assertEquals(q.dequeue(), 20);
      assertEquals(q.peek(), 30);
    });

    await t.step("dequeues until empty", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);

      q.dequeue();
      q.dequeue();

      assertEquals(q.length, 0);
      assertEquals(q.dequeue(), null);
    });
  });

  await t.step("peek()", async (t) => {
    await t.step("an empty queue", () => {
      const q = new Queue<number>();

      assertEquals(q.length, 0);
      assertEquals(q.peek(), null);
    });

    await t.step("a non-empty queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);

      assertEquals(q.peek(), 10);
      assertEquals(q.length, 2);

      ////
      // Head still has to be the same, as peek does not
      // mutate the queue. Length must not change either.
      //
      assertEquals(q.length, 2);
      assertEquals(q.peek(), 10);
    });
  });
});

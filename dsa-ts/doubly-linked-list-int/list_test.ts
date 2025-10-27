import { assertEquals } from "@std/assert";
import { Node } from "./node.ts";
import { List } from "./list.ts";

Deno.test("List", async (t) => {
  await t.step("constructor()", async (t) => {
    await t.step("empty list", () => {
      const list: List<number> = new List<number>();

      assertEquals(list.head, null);
      assertEquals(list.tail, null);
    });

    await t.step("non-empty head", () => {
      const list: List<number> = new List<number>(42);
      const node: Node<number> = new Node(42);

      assertEquals(list.head, node);
      assertEquals(list.tail, node);

      const head = list.head!;
      const tail = list.tail!;

      assertEquals(head.next, null);
      assertEquals(head.prev, null);

      assertEquals(tail.next, null);
      assertEquals(tail.prev, null);
    });
  });

  await t.step("append()", async (t) => {
    await t.step("to an empty list", () => {
      const list: List<number> = new List<number>();
      const node = new Node(0);

      list.append(0);

      assertEquals(list.head, node);
      assertEquals(list.tail, node);
    });

    await t.step("to a list containing only the head", () => {
      const list: List<number> = new List<number>(0);
      const prevTail = list.tail;
      const newTail = new Node(1);
      newTail.prev = prevTail;

      list.append(1);

      assertEquals(list.tail, newTail);
      assertEquals(list.tail!.prev, prevTail);
      assertEquals(list.head!.next, newTail);
    });

    await t.step("to a list containing a few nodes already", () => {
      const list: List<number> = new List<number>(0);
      list.append(1);
      list.append(2);
      list.append(3);

      assertEquals(list.tail!.data, 3);
      assertEquals(list.tail!.next, null);
      assertEquals(list.tail!.prev!.data, 2);
    });
  });
});

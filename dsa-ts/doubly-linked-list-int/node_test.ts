import { assertEquals } from "@std/assert";
import { Node } from "./node.ts";

Deno.test("Node", async (t) => {
  await t.step("creates a new node", () => {
    const node: Node<number> = new Node(42);

    assertEquals(node.data, 42);
    assertEquals(node.next, null);
    assertEquals(node.prev, null);
  });
});

import { Node } from "./node";

describe("Node", () => {
  it("creates a new node", () => {
    const node: Node<number> = new Node(42);

    expect(node.val).toBe(42);
    expect(node.next).toBe(null);
    expect(node.prev).toBe(null);
  });
});

import { Node } from "./node";
import { List } from "./list";

describe("List", () => {
  it("creates an empty list", () => {
    const list: List<number> = new List<number>();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("creates a list with a non-empty head", () => {
    const list: List<number> = new List<number>(42);
    const node: Node<number> = new Node(42);

    expect(list.head).toEqual(node);
    expect(list.tail).toEqual(node);

    const head = list.head!;
    const tail = list.tail!;

    expect(head.next).toEqual(null);
    expect(head.prev).toEqual(null);

    expect(tail.next).toEqual(null);
    expect(tail.prev).toEqual(null);
  });

  describe("append()", () => {});
});

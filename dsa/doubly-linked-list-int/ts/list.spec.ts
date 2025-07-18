import { Node } from "./node";
import { List } from "./list";

describe("List", () => {
  describe("constructor()", () => {
    it("empty list", () => {
      const list: List<number> = new List<number>();

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    it("non-empty head", () => {
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
  });

  describe("append()", () => {
    it("to an empty list", () => {
      const list: List<number> = new List<number>();
      const node = new Node(0);

      list.append(0);

      expect(list.head).toEqual(node);
      expect(list.tail).toEqual(node);
    });

    it("to a list containing only the head", () => {
      const list: List<number> = new List<number>(0);
      const prevTail = list.tail;
      const newTail = new Node(1);
      newTail.prev = prevTail;

      list.append(1);

      expect(list.tail).toEqual(newTail);
      expect(list.tail!.prev).toEqual(prevTail);
      expect(list.head!.next).toEqual(newTail);
    });
  });
});

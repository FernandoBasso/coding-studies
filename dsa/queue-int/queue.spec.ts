import { Queue } from "./queue";

describe("Queue<T>", () => {
  describe("constructor()", () => {
    it("can construct an empty queue of a given type", () => {
      const q = new Queue<number>();

      expect(q.length).toBe(0);
    });
  });

  describe("enqueue()", () => {
    it("to an empty queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);

      expect(q.length).toBe(1);
      expect(q.peek()).toBe(10);
    });

    it("to a non-empy queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);
      q.enqueue(30);

      expect(q.length).toBe(3);
      expect(q.peek()).toBe(10);
    });
  });

  describe("peek()", () => {
    it("an empty queue", () => {
      const q = new Queue<number>();

      expect(q.peek()).toBe(null);
    });
  });
});

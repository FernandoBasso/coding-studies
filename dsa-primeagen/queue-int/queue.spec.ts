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

  describe("dequeue()", () => {
    it("can return the head", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);
      q.enqueue(30);

      expect(q.dequeue()).toBe(10);
      expect(q.length).toBe(2);

      expect(q.peek()).toBe(20);

      expect(q.dequeue()).toBe(20);
      expect(q.peek()).toBe(30);
    });

    it("dequeues until empty", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);

      q.dequeue();
      q.dequeue()

      expect(q.length).toBe(0);
      expect(q.dequeue()).toBe(null);
    });
  });

  describe("peek()", () => {
    it("an empty queue", () => {
      const q = new Queue<number>();

      expect(q.length).toBe(0);
      expect(q.peek()).toBe(null);
    });

    it("a non-empty queue", () => {
      const q = new Queue<number>();
      q.enqueue(10);
      q.enqueue(20);

      expect(q.peek()).toBe(10);
      expect(q.length).toBe(2);

      ////
      // Head still has to be the same, as peek does not
      // mutate the queue. Length must not change either.
      //
      expect(q.length).toBe(2);
      expect(q.peek()).toBe(10);
    });
  });
});

import { isNull } from "../libts";
export type QNode<T> = {
  val: T;
  next: QNode<T> | null;
};

export class Queue<T> {
  #head: QNode<T> | null;
  #tail: QNode<T> | null;
  length: number;

  constructor() {
    this.#head = this.#tail = null;
    this.length = 0;
  }

  enqueue(val: T): void {
    const newNode: QNode<T> = { val, next: null };

    ++this.length;

    if (this.#tail === null) {
      this.#head = this.#tail = newNode;
      return;
    }

    this.#tail.next = newNode;
    this.#tail = newNode;
  }

  dequeue(): T | null {
    if (isNull(this.#head))
      return null;

    --this.length;

    const nodeToReturn = this.#head;

    this.#head = this.#head.next;

    return nodeToReturn.val;
  }

  peek(): T | null {
    if (isNull(this.#head))
      return null;

    return this.#head.val;
  }
}

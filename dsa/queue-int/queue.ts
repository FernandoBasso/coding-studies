//
// tags: dsa queue linked-list
//

/*
 * We could implement a Queue in ECMAscript using arrays, but here
 * we implement it using a singly linked list.
 */

export type QNode<T> = {
  value: T;
  next: QNode<T> | null;
};

export class Queue<T> {
  public length: number;
  private head: QNode<T> | null;
  private tail: QNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(val: T): void {
    const node: QNode<T> = { value: val, next: null };

    this.length++;

    if (!this.tail)
      this.tail = this.head = node;
    else
      this.tail.next = node;
  }

  peek(): T | null {
    if (!this.head?.value)
      return null;

    return this.head.value;
  };
}

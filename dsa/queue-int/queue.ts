//
// tags: dsa queue linked-list
//

/*
 * We could implement a Queue in ECMAscript using arrays, but here
 * we implement it using a singly linked list as some operations will
 * have a better time complexity.
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

  /**
   * Appends a new value to the end of the queue.
   */
  enqueue(val: T): void {
    const node: QNode<T> = { value: val, next: null };

    this.length++;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  /**
   * Returns the head value, if any. Makes `head.next` the new head.
   */
  dequeue(): T | null {
    if (!this.head)
      return null;

    this.length--;

    const headToReturn = this.head;

    ////
    // Make the next element become the new head.
    //
    this.head = this.head.next;

    return headToReturn.value;
  }

  /**
   * Returns the head value or null. Does not mutate the queue.
   */

  peek(): T | null {
    if (!this.head)
      return null;

    return this.head.value;
  };
}

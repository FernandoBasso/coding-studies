import { isNil, type Nullable } from "../lib.ts";
import { Node } from "./node.ts";

export class List<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;

  /**
   * Constructs a new doubly linked list.
   *
   * If data is provided, then create a non-empty list where both the
   * head and the tail contain data. Otherwise, creates an empty list.
   */
  constructor(data?: Nullable<T>) {
    if (isNil(data)) {
      this.head = null;
      this.tail = null;
    } else {
      const node: Node<T> = new Node(data);
      this.head = node;
      this.tail = node;
    }
  }

  /**
   * Appends an element to the tail of the list, making the new element
   * become the new tail.
   */
  public append(data: T): void {
    const newNode = new Node(data);

    if (isNil(this.tail)) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currTail = this.tail;
      newNode.prev = currTail;
      this.tail = newNode;
      this.head!.next = newNode;
    }
  }
}

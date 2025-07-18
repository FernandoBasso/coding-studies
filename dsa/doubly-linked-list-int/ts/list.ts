import { isNil, type Nullable } from "../../libts";
import { Node } from "./node";

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
}

export class Node<T> {
  public data: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(v: T) {
    this.data = v;
    this.next = null;
    this.prev = null;
  }
}

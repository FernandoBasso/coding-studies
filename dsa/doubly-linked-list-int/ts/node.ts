export class Node<T> {
  public val: T;
  public next: T | null;
  public prev: T | null;

  constructor(v: T) {
    this.val = v;
    this.next = null;
    this.prev = null;
  }
}

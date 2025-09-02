type StackNode<T> = {
  value: T | null;
  prev: StackNode<T> | null;
};

export class Stack<T> {
  private _top: StackNode<T> | null;
  private _size: number;

  constructor() {
    this._top = null;
    this._size = 0;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }

  /**
   * Returns the top value without deleting it from the stack.
   */
  peek(): T | null {
    if (this._top === null)
      return null;

    return this._top.value;
  }

  /**
   * Inserts a new value at the top of the stack.
   */
  push(val: T): void {
    const node: StackNode<T> = { value: val, prev: null };

    this._size++;

    if (this._top === null) {
      this._top = node;
      return;
    }

    node.prev = this._top;
    this._top = node;

    return void (0);
  }

  /**
   * Returns the value at the top of the stack and removes
   * it from the stack.
   */
  pop(): T | null {
    if (this._top === null) return null;

    const top = this._top;

    this._size--;
    this._top = this._top.prev;

    return top.value;
  }
}

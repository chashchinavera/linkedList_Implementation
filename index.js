class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    if (!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
      return this;
    }

    this.tail.next = new Node(value, this.tail);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }
}

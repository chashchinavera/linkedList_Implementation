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

  prepend(value) {
    if (!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
      return this;
    }

    this.head.prev = new Node(value, null, this.head);
    this.head = this.head.prev;
    this.length++;
    return this;
  }

  createFromArray(array) {
    for (let i = 0; i < array.length; i++) {
      this.append(array[i]);
    }
  }

  toArray() {
    if (this.length === 0) return [];

    const array = [];

    let current = this.head;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  each(callback) {
    let current = this.head;

    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }

  eachReversed(callback) {
    let current = this.tail;

    while (current !== null) {
      callback(current.value);
      current = current.prev;
    }
  }

  indexOf(value) {
    let index = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      ++index;
    }

    return -1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    if (current.prev) {
      current.prev.next = current.next;
    } else {
      this.head = this.head.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    } else {
      this.tail = this.tail.prev;
    }

    --this.length;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = new Node(value, current, current.next);
    current.next.next.prev = current.next;
  }

  insertAtEnd(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.append(value);
      return;
    }

    if (index === this.length) {
      this.prepend(value);
      return;
    }

    let current = this.tail;
    for (let i = 0; i < index; i++) {
      current = current.prev;
    }

    current.next = new Node(value, current, current.next);
    current.next.next.prev = current.next;
    ++this.length;
  }
}

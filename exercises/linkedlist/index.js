// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // ANOTHER SOLUTION
    // this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previous = previous.next;
      currentNode = currentNode.next;
    }

    previous.next = null;
  }

  insertLast(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
  }

  getAt(index) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (this.head === null) {
      return null;
    }

    if (this.getAt(index) === null) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      // let previous = this.getAt(index - 1);
      // let node = this.getAt(index);
      // let holdingPoitner = node.next;
      // previous.next = holdingPoitner;

      let currentNode = this.head;
      let nextNode = this.head.next;
      let counter = 0;
      while (currentNode) {
        currentNode = currentNode.next;
        nextNode = nextNode.next;
        if (index - 1 === counter) {
          let holdingPointer = nextNode;
          currentNode.next = holdingPointer;
        }
      }
    }

    return null;
  }
}

const list = new LinkedList();
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);

module.exports = { Node, LinkedList };

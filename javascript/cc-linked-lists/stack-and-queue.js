'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // Code Challenge 10

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top !==null) {
      let node = this.top;
      this.top = node.next;
      return node;
    }
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }

  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {

  }

  peek() {

  }

  isEmpty() {

  }
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

stack.pop();
console.log(stack);

let peek = stack.peek();
console.log(peek);

stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty());

let queue = new Queue();
queue.enqueue(1);
console.log(queue);

module.exports = {
  Node,
  Stack,
  Queue,
};

'use strict';

const { Stack } = require('./stack-and-queue'); // access to push, pop, peek

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
    this.top = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.stackOne && this.stackTwo === null) {
      this.stackOne.push(newNode);
    } else if (this.stackTwo === null) {
      this.stackTwo.push(newNode);
      // } else if (this.stackOne === null)
      // ??
    }
  }

  dequeue(value) {
    let newNode = new Node(value);
    if (this.stackOne && this.stackTwo === null) {
      console.log('error');
    } else if (this.stackTwo === null) {
      this.stackOne.pop(this.top);
      this.stackTwo.push(newNode);
    }
  }
}

let queue = new PseudoQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(8);
queue.dequeue(9);
console.log(queue);


module.exports = {
  PseudoQueue
};

'use strict';

const { Stack } = require('./stack-and-queue'); // access to push, pop, peek

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
    this.top = null;
  }

  enqueue(value) {
    if (this.stackOne.isEmpty() && this.stackTwo.empty) {
      let newNode = newNode(value);
      this.stackOne.push(newNode);
    } else if (this.stackTwo.empty) {
      let newNode = newNode(value);
      this.stackOne.push(newNode);
    } else if (this.stackTwo.isEmpty() && !this.stackTwo.empty) {
      while (!this.stackTwo.empty) {
        this.stackOne.push(this.stackTwo.pop());
      }
      let newNode = newNode(value);
      this.input.push(newNode);
    }
  }

  dequeue() {
    if (this.stackTwo.empty) {
      while (!this.stackOne.isEmpty()){
        this.stackTwo.push(this.stackOne.pop());
      }
      return this.stackTwo.pop();
    } else {
      return this.stackTwo.pop();
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

'use strict';

const { Stack, Queue } = require('../stack-and-queue.js');

describe('Tests for Stack', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.pop();

    expect(stack.top).toBeNull();

  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.next).toBeUndefined();
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.isEmpty();

    this.isNot;
  });

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.peek();

    expect(stack.top.value).toEqual(3);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.peek();

    expect(stack.top.valu).toThrow('undefined');
  });

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.value).toEqual(1);
    expect(queue.next.value).toEqual(2);
    expect(queue.next.next.value).toEqual(3);
  });

  test('Can successfully enqueue multiple values into a queue', () => {


    expect().toEqual();
  });

  test('Can successfully dequeue out of a queue the expected value', () => {


    expect().toEqual();
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {


    expect().toEqual();
  });

  test('Can successfully empty a queue after multiple dequeues', () => {


    expect().toEqual();
  });

  test('Can successfully instantiate an empty queue', () => {


    expect().toEqual();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {


    expect().toEqual();
  });
})
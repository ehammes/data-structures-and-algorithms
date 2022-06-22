'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  // **** INSERT - **** google pre-pending to a linked list - Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // *** INCLUDES - Indicates whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        // console.log(true);
        return true;
      }
      node = node.next;
    }
    // console.log(false);
    return false;
  }

  // *** TO STRING - Returns: a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
  /// REVISIT

  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode) {
      string += '{ ' + currentNode.value + ' }' + ' -> ';
      currentNode = currentNode.next;
      console.log(string);
    }
    return string;
  }

  // append
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // insert before
  insertBefore(value, newValue) {
    const node = new Node(value);
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.node = node;
        current.node.value = newValue;
        return;
      }
      current = current.next;
    }
    console.log(current.next);
  }

  // insert after
  insertAfter(value, newValue) {
    const node = new Node(value);
  }
}

let linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.includes(4);
linkedList.includes(2);
linkedList.includes(6);
linkedList.toString();
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.insertBefore(3, 7);
linkedList.traverse();

module.exports = LinkedList;

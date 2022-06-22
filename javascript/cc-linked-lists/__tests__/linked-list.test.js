'use strict';

const supertest = require('supertest');
const LinkedList = require('../LinkedList');

/// REVISIT TESTS
describe('Testing Linked Lists', () => {

  // Can successfully instantiate an empty linked list
  test('Successfully instantiates an empty linked list', async () => {
    let linkedList = new LinkedList();
    linkedList();

  });

  // Can properly insert into the linked list
  test('Properly inserts into the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    expect().toBeEqual();

  });

  // The head property will properly point to the first node in the linked list
  test('The head property properly points to the first node in the linked list', async () => {
    let linkedList = new LinkedList();

  });

  // Can properly insert multiple nodes into the linked list
  test('Properly inserts multiple nodes into the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect().toBeEqual();
    expect().toBeEqual();
    expect().toBeEqual();
  });

  // Will return true when finding a value within the linked list that exists
  test('Returns true when finding a value within the linked list that exists', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.includes(1);
    expect().toBeEqual(true);

  });

  // Will return false when searching for a value in the linked list that does not exist
  test('Returns false when searching for a value in the linked list that does not exist', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.includes(6);
    expect().toBeEqual(false);

  });

  // Can properly return a collection of all the values that exist in the linked list
  test('Properly returns a collection of all the values that exist in the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.toString(6);
    expect().toBeEqual();

  });

  // Can successfully add a node to the end of the linked list
  test('Adds a node to the end of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.append(4);
    expect().toBeEqual();

  });

  // Can successfully add multiple nodes to the end of a linked list
  test('Adds multiple nodes to the end of a linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.append(4,5,6);
    expect().toBeEqual();

  });

  // Can successfully insert a node before a node located i the middle of a linked list
  test('Inserts a node before a node located i the middle of a linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insertBefore(3, 7);
    expect().toBeEqual();

  });
  // Can successfully insert a node before the first node of a linked list
  test('Inserts a node before the first node of a linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insertBefore(1, 8);
    expect().toBeEqual();

  });
  // Can successfully insert after a node in the middle of the linked list
  test('Inserts after a node in the middle of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insertAfter(4, 6);
    expect().toBeEqual();

  });
  // Can successfully insert a node after the last node of the linked list
  test('Inserts a node after the last node of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insertAfter(4, 6);
    expect().toBeEqual();

  });

  // CC 07
  // Where k is greater than the length of the linked list
  test('k is greater than the length of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.kthFromEnd(8);
    expect().toBeEqual();

  });
  // Where k and the length of the list are the same
  test('k = the length of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.kthFromEnd(4);
    expect().toBeEqual();

  });
  // Where k is not a positive integer
  test('k is a negative number', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.kthFromEnd(-2);
    expect().toBeEqual();

  });
  // Where the linked list is of a size 1
  test('the length of the list is 1', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.kthFromEnd(0);
    expect().toBeEqual();

  });
  // “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
  test('the node value kth from the end of the linked list', async () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.kthFromEnd(2);
    expect().toBeEqual();

  });
})

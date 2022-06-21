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
})

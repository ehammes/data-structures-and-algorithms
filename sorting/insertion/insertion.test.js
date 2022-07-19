'use strict';

let insertionSort = require('./index');

describe('Test insertion sample array', () => {
  //cc 26
  test('Test insertionSort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let insert = insertionSort(arr);

    expect(insert).toEqual([4, 8, 15, 16, 23, 42]);

  });

  test('Test insertionSort - Reverse-sorted', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let insert = insertionSort(arr);

    expect(insert).toEqual([ -2, 5, 8, 12, 18, 20]);

  });

  test('Test insertionSort - Few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let insert = insertionSort(arr);

    expect(insert).toEqual([ 5, 5, 5, 7, 7, 12]);

  });

  test('Test insertionSort - Nearly-sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let insert = insertionSort(arr);

    expect(insert).toEqual([ 2, 3, 5, 7, 11, 13]);

  });
});

'use strict';

let { mergeSort } = require('./index');

describe('Test merge sort sample array', () => {
  //cc 27
  test('Test mergeSort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let merge = mergeSort(arr);

    expect(merge).toEqual([4, 8, 15, 16, 23, 42]);

  });

  test('Test mergeSort - Reverse-sorted', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let merge = mergeSort(arr);

    expect(merge).toEqual([ -2, 5, 8, 12, 18, 20]);

  });

  test('Test mergeSort - Few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let merge = mergeSort(arr);

    expect(merge).toEqual([ 5, 5, 5, 7, 7, 12]);

  });

  test('Test mergeSort - Nearly-sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let merge = mergeSort(arr);

    expect(merge).toEqual([ 2, 3, 5, 7, 11, 13]);

  });
});

'use strict';

let { quickSort } = require('./index');

describe('Test merge sort sample array', () => {
  //cc 27
  test('Test quickSort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let quick = quickSort(arr);

    expect(quick).toEqual([4, 8, 15, 16, 23, 42]);

  });

  test('Test quickSort - Reverse-sorted', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let quick = quickSort(arr);

    expect(quick).toEqual([ -2, 5, 8, 12, 18, 20]);

  });

  test('Test quickSort - Few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let quick = quickSort(arr);

    expect(quick).toEqual([ 5, 5, 5, 7, 7, 12]);

  });

  test('Test quickSort - Nearly-sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let quick = quickSort(arr);

    expect(quick).toEqual([ 2, 3, 5, 7, 11, 13]);

  });
});

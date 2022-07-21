'use strict';

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot,...quickSort(right)];
}


let arr1 = [8, 4, 23, 42, 16, 15];
let reverseSort = [20, 18, 12, 8, 5, -2];
let fewUnique = [5, 12, 7, 5, 5, 7];
let nearlySorted = [2, 3, 5, 7, 13, 11];


let newArr = quickSort(arr1);
let newArr1 = quickSort(reverseSort);
let newArr2 = quickSort(fewUnique);
let newArr3 = quickSort(nearlySorted);

console.log(newArr);
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);

module.exports = {
  quickSort,
};

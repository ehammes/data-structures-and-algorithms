'use strict';

let arr = [8, 4, 23, 42, 16, 15];
let reverseSort = [20, 18, 12, 8, 5, -2];
let fewUnique = [5, 12, 7, 5, 5, 7];
let nearlySorted = [2, 3, 5, 7, 13, 11];

function insertionSort(arr){

  for (let i = 1; i < arr.length; i++) {
    let j = i-1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = temp;
  }
  return arr;
}

let insert = insertionSort(arr);
let insert1 = insertionSort(reverseSort);
let insert2 = insertionSort(fewUnique);
let insert3 = insertionSort(nearlySorted);

console.log(insert);
console.log(insert1);
console.log(insert2);
console.log(insert3);

module.exports = insertionSort;

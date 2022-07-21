'use strict';

//----revisit, fix mergeSort function
function mergeSort(arr) {
  let n = arr.length;
  if ( n > 1) {
    let mid = n / 2; // add Math.floor
    let left = []; // items.slice(0, middle)
    for (let i = 0; i < mid; i++){
      left.push(arr[i]);
    }
    let right = []; // items.slice(middle)
    for (let i = mid; i < n; i++){
      right.push(arr[i]);
    }
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length){
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
  } if (i === left.length){ //need to revisit the below
    arr = right;
  } else {
    arr = left;
  }
}


let arr1 = [8, 4, 23, 42, 16, 15];
// let reverseSort = [20, 18, 12, 8, 5, -2];
// let fewUnique = [5, 12, 7, 5, 5, 7];
// let nearlySorted = [2, 3, 5, 7, 13, 11];


let newArr = mergeSort(arr1);
// let merge1 = mergeSort(reverseSort);
// let merge2 = mergeSort(fewUnique);
// let merge3 = mergeSort(nearlySorted);

console.log(newArr);
// console.log(merge1);
// console.log(merge2);
// console.log(merge3);

module.exports = {
  mergeSort,
};

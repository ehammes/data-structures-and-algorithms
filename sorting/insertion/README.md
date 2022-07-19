# Blog Notes: 

## Insertion Sort CC 26

### Author: Elizabeth Hammes

### Problem Domain

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.  

- Pseudocode

      InsertionSort(int[] arr)

      FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

- Sample Arrays
  - In your blog article, visually show the output of processing this input array: `[8,4,23,42,16,15]`

- For your own understanding, consider also stepping through these inputs:
  - Reverse-sorted: [20,18,12,8,5,-2]
  - Few uniques: [5,12,7,5,5,7]
  - Nearly-sorted: [2,3,5,7,13,11]
- Implementation
  - Provide a visual step through for each of the sample arrays based on the provided pseudo code
  - Convert the pseudo-code into working code in your language
  - Present a complete set of working tests

### CC 26 Post:

The insertionSort function is comparing the temp value to the value left of it and resorting the array from smallest to largest. The function uses a for loop and while loop to loop through the array and resort based on the values. See visual step-through below.

![visual](./public/img/cc-26.jpg)

### Code

[sortInsertion Function](./index.js)

### Testing

[sortInsertion Test](./insertion.test.js)
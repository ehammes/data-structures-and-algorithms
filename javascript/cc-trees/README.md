# Code Challenges Code401

## Challenges

### Code 15

* Create a Binary Tree class
  * Define a method for each of the depth first traversals: pre order, in order, post order which returns an array of the values, ordered appropriately.
* Create a Binary Search Tree class
  * This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    * Add
      * Arguments: value
      * Return: nothing
      * Adds a new node with that value in the correct location in the binary search tree.
    * Contains
      * Argument: value
      * Returns: boolean indicating whether or not the value is in the tree at least once.

### Code 16

* find maximum value
  * Arguments: none
  * Returns: number

### Code 17

* Write a function called breadth first
  * Arguments: tree
  * Return: list of all values in the tree, in the order they were encountered

### Code 18

* Write a function called fizz buzz tree
  * Arguments: binary tree
  * Return: new binary tree
* Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
  * If the value is divisible by 3, replace the value with “Fizz”
  * If the value is divisible by 5, replace the value with “Buzz”
  * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
  * If the value is not divisible by 3 or 5, simply turn the number into a String.

## Approach & Efficiency

* CC15: Based on learnings from review and online research.
* CC16: Utilized previous traverse behavior to traverse through nodes and reassign temp value based on if the current node is greater than the existing temp value.
* CC17: Referred to notes and review and wrote down whiteboarding steps.
* CC18: Plan to revisit to make sure entire tree is being replaced with correct strings.

## Methods

* Uses the following methods: `preorder`, `inOrder`, `postOrder`, `add`, `contains`
* Functions: `breadthFirst();`

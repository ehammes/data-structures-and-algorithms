# Singly Linked List

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Challenges

### Code05

* Create a Linked List class
* Within your Linked List class, include a head property.
* Upon instantiation, an empty Linked List should be created.
* The class should contain the following methods: `insert`, `includes`, `toString`
* Write tests to prove the functionality

### Code06

Write the following methods for the Linked List class:

* **append**
  * arguments: new value
  * adds a new node with the given value to the end of the list
* **insert before**
  * arguments: value, new value
  * adds a new node with the given new value immediately before the first node that has the value specified
* **insert after**
  * arguments: value, new value
  * adds a new node with the given new value immediately after the first node that has the value specified

### Code07

Write the following method for the Linked List class:

* kth from end
  * argument: a number, k, as a parameter.
  * Return the node’s value that is k places from the tail of the linked list.
  * You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

* CC05, CC06: I worked on this challenge by reviewing the lecture, my notes, and testing via console logs. The class is inserted with nodes at an O(1) Time performance.
* CC07: Calculated the length of the linked list, subtracted the length of the list from k, and the returned the value of the node in position k from the head.

## API

* Uses the following methods: `insert`, `includes`, `toString`, `append`, `insertBefore`, `insertAfter`, `kthFromEnd`

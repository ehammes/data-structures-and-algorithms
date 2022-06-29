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

### Code08

* Write a function called zip lists
* Arguments: 2 linked lists
* Return: New Linked List, zipped as noted below
* Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
* Try and keep additional space down to O(1)
* You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Code10

Stack

* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* The class should contain the following methods:
  * push
    * Arguments: value
    * adds a new node with that value to the top of the stack with an O(1) Time performance.
  * pop
    * Arguments: none
    * Returns: the value from node from the top of the stack
    * Removes the node from the top of the stack
    * Should raise exception when called on empty stack
  * peek
    * Arguments: none
    * Returns: Value of the node located at the top of the stack
    * Should raise exception when called on empty stack
  * is empty
    * Arguments: none
    * Returns: Boolean indicating whether or not the stack is empty.
* Queue
  * Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  * This object should be aware of a default empty value assigned to front when the queue is created.
  * The class should contain the following methods:
  * enqueue
    * Arguments: value
    * adds a new node with that value to the back of the queue with an O(1) Time performance.
  * dequeue
    * Arguments: none
    * Returns: the value from node from the front of the queue
    * Removes the node from the front of the queue
    * Should raise exception when called on empty queue
  * peek
    * Arguments: none
    * Returns: Value of the node located at the front of the queue
    * Should raise exception when called on empty stack
  * is empty
    * Arguments: none
    * Returns: Boolean indicating whether or not the queue is empty

### Code11

* Create a new class called pseudo queue
* Methods:
  * `enqueue`
    * Arguments: value
    * Inserts value into the PseudoQueue, using a first-in, first-out approach.
  * `dequeue`
    * Arguments: none
    * Extracts a value from the PseudoQueue, using a first-in, first-out approach.

### Code12

* Create a class called `AnimalShelter` which holds only dogs and cats.
* The shelter operates using a first-in, first-out approach.
* Methods:
  * `enqueue`
    * Arguments: animal
      * animal can be either a dog or a cat object.
  * `dequeue`
    * Arguments: pref
      * pref can be either "dog" or "cat"
    * Return: either a dog or a cat, based on preference.
      * If pref is not "dog" or "cat" then return null

## Approach & Efficiency

* CC05, CC06: I worked on this challenge by reviewing the lecture, my notes, and testing via console logs. The class is inserted with nodes at an O(1) Time performance.
* CC07: Calculated the length of the linked list, subtracted the length of the list from k, and the returned the value of the node in position k from the head.
* CC08: Need to revisit approach
* CC10: Based on learnings from lecture
* CC11: Based on learnings from lecture and demo code
* CC12: Based on learnings from lecture and demo code. Two queues: dog and cat.

## Methods

* Uses the following methods: `insert`, `includes`, `toString`, `append`, `insertBefore`, `insertAfter`, `kthFromEnd`, `zipLists`, `push`, `pop`, `peek`, `isEmpty`, `enqueue`, `dequeue`

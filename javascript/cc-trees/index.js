'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let newArr = [];
    const traverse = node => {
      newArr.push(node.value);
      // recursive
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return newArr;
  }

  inOrder() {
    let newArr = [];
    const traverse = node => {

      if (node.left) traverse(node.left);
      newArr.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return newArr;
  }

  postOrder() {
    let newArr = [];
    const traverse = node => {

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      newArr.push(node.value);
    };
    traverse(this.root);
    return newArr;
  }

  // CC16
  getMaxValue() {
    if (this.root === null) {
      return null;
    } else {
      let maxValue = this.root.value;
      let currentNode = this.root;
      const traverse = node => {
        if (node.value > maxValue) {
          maxValue = node.value;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
      traverse(currentNode);
      return maxValue;
    }
  }
}


class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    if (newNode < this.root) {
      this.node.left = newNode;
    } else if (newNode > this.root.value) {
      this.node.right = newNode;
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    if (value < this.root) {
      value = this.root.left;
    } else if (value > this.root) {
      value = this.root.right;
    }
    if (value) return true;
    return false;
  }

}

// CC17 - revisit
function breadthFirst(tree) {
  let newQueue = [];
  let results = [];
  let currentNode = tree.root;
  newQueue.push(currentNode);
  while (newQueue !== null) {
    currentNode = newQueue.shift(currentNode);
    results.push(currentNode);
    if (currentNode.left) { newQueue.push(currentNode.left); }
    if (currentNode.right) { newQueue.push(currentNode.right); }
  }
  return results;
}

// CC 18
function fizzBuzzTree(tree){
  const traverse = node => {
    if (node.value % 3 === 0) { node.value = 'Fizz'; }
    if (node.value % 5 === 0) { node.value = 'Buzz'; }
    if (node.value % 3 === 0 && node.value % 5 === 0 ) { node.value = 'FizzBuzz'; }
    if (node.value % 3 !== 0 || node.value % 5 !== 0 ) { node.value.toString(); }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
  return tree;
}

let tree = new BinaryTree();
tree.root = new Node(12);
tree.root.left = new Node(4);
tree.root.right = new Node(17);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(9);
tree.root.right.left = new Node(14);
tree.root.right.right = new Node(22);

// let preOrder = tree.preOrder();
// let inOrder = tree.inOrder();
// let postOrder = tree.postOrder();
// let maxValue = tree.getMaxValue();
// let breadthF = breadthFirst(tree);
let fbt = fizzBuzzTree(tree);

// console.log('preorder:', preOrder);
// console.log('inOrder:', inOrder);
// console.log('postOrder:', postOrder);
// console.log('maxValue:', maxValue);
// console.log('breadthFirst:', breadthF);
console.log('fizzBuzzTree:', fbt);



// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.root = new Node(12);
// let add = binarySearchTree.add(2);
// let contains = binarySearchTree.contains(2);

// console.log('add:', add);
// console.log('contains:', contains);



module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree,
  breadthFirst,
  fizzBuzzTree
};

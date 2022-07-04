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

}


class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }
    if (newNode < this.root){
      this.node.left = newNode;
    } else if (newNode > this.root.value){
      this.node.right = newNode;
    }
  }

  contains(value){
    if(this.root === null){
      return false;
    }
    if (value < this.root) {
      value = this.root.left;
    } else if (value > this.root){
      value = this.root.right;
    }
    if (value) return true;
    return false;
  }

}

let tree = new BinaryTree();
tree.root = new Node(12);
tree.root.left = new Node(4);
tree.root.right = new Node(17);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(9);
tree.root.right.right = new Node(22);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();

console.log('preorder:', preOrder);
console.log('inOrder:', inOrder);
console.log('postOrder:', postOrder);

let binarySearchTree = new BinarySearchTree();
binarySearchTree.root = new Node(12);
let add = binarySearchTree.add(2);
let contains = binarySearchTree.contains(2);

console.log('add:', add);
console.log('contains:', contains);



module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree
};

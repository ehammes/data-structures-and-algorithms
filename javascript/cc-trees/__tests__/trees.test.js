'use strict';

const { BinaryTree, Node, BinarySearchTree } = require('../index');

//CC 15
describe('Tests for Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree).toEqual({ 'root': null });

  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);

    expect(tree).toEqual({ 'root': { 'left': null, 'right': null, 'value': 12 } });

  });


  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(4);
    tree.root.right = new Node(17);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(9);
    tree.root.right.right = new Node(22);
    let preOrder = tree.preOrder();

    expect(preOrder).toEqual([12, 4, 2, 9, 17, 22]);

  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(2);
    binarySearchTree.add(4);


    expect(binarySearchTree).toEqual();

  });

  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(4);
    tree.root.right = new Node(17);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(9);
    tree.root.right.right = new Node(22);
    let inOrder = tree.inOrder();

    expect(inOrder).toEqual([2, 4, 9, 12, 17, 22]);

  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(4);
    tree.root.right = new Node(17);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(9);
    tree.root.right.right = new Node(22);
    let inOrder = tree.inOrder();

    expect(inOrder).toEqual([2, 4, 9, 12, 17, 22]);

  });


  test('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(4);
    tree.root.right = new Node(17);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(9);
    tree.root.right.right = new Node(22);
    let postOrder = tree.postOrder();

    expect(postOrder).toEqual([2, 9, 4, 22, 17, 12]);

  });

  test('Returns true or	false for the contains method, given an existing or non-existing node value', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.root = new Node(2);
    let contains = binarySearchTree.contains(2);


    expect(contains).toByTruthy;

  });

  // CC 16
  test('Returns the max value of a Binary Tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(4);
    tree.root.right = new Node(17);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(9);
    tree.root.right.right = new Node(22);
    let maxValue = tree.getMaxValue();

    expect(maxValue).toEqual(22);

  });

  test('Returns null if the Binary Tree doesn\t contain any nodes when locating max value', () => {
    let tree = new BinaryTree();
    let maxValue = tree.getMaxValue();

    expect(maxValue).toBeNull();

  });

});

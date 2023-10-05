import Node from "./node.js";

export default class Tree {

  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    // Sorts arraay in place 
    this.sortArray(arr); 
    // Re-cast, removing duplicates
    arr = this.deleteDuplicates(arr);
    // Build tree from sorted, unique array 
    const root = this.sortedArrayToBST(arr, 0, arr.length-1) 
    return root;
  }

  sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }

  deleteDuplicates(arr) {
    // user Sets to remove duplicates and have only unique values in array
    const uniques = [...new Set(arr)];
    return uniques;
  }

  sortedArrayToBST(arr, start, end) {
    if (start > end) return null;
    // Find mid and make node
    const mid = parseInt((start + end) / 2, 10);
    const node = new Node(arr[mid]);
    // Traverse left and make nodes from LHS array, right for RHS array
    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);
    return node;
  }

  insert(value, node = this.root) {
    // Inserts as new node (leaf) if at null value (end of branch)
    if (node == null) {
      node = new Node(value);
      return node;
    }

    // Do nothing if value exists
    if (value === node.value) return;
    
    // Traverse tree to end of leaf and insert value as new node
    if (value < node.value) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  delete(value, node = this.root) {

  }

  // Prints visual depiction of binary tree
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

}

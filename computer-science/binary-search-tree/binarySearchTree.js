import Node from "./node.js";

export default class Tree {

  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    const root = this.sortedArrayToBST(arr, 0, arr.length) 
    this.prettyPrint(root);
    return root;
  }

  sortedArrayToBST(arr, start, end) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2, 10);
    const node = new Node(arr[mid]);
    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);
    return node;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

}

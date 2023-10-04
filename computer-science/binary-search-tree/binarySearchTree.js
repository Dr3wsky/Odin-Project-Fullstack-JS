import Node from "./node.js";

export default class Tree {

  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    const root = this.sortedArrayToBST(arr, 0, arr.length) 
    return root;
  }

  sortedArrayToBST(arr, start, end) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2, 10);
    const node = new Node(arr[mid]);
    node.left = sortedArrayToBST(arr, start, mid - 1);
    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;
  }

  // prettyPrint(node, prefix = "", isLeft = true) {
  //   if (node === null) {
  //     return;
  //   }
  //   if (node.right !== null) {
  //     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  //   }
  //   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  //   if (node.left !== null) {
  //     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  //   }
  
  // }

}

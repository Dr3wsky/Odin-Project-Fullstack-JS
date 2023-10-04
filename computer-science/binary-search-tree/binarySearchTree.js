import Node from "./node.js";

export default class Tree {

  constructor() {
    this.root = this.buildTree(arr);
  }

  sortedArrayToBST(arr) {
    let start = arr[0];
    let end = arr[arr.length];

    if (arr[0] > arr[arr.length]) return null;

    let mid = Math.flloor(arr.length/2);
    let node = new Node(arr[mid]);
    node.left = createBST(arr.slice(0, mid));
    node.right = createBST(arr.slice(mid, arr.lenght));
    return node;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  
  }

}

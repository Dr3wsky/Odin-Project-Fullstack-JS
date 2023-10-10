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
    } else if (value > node.value) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  delete(value, node = this.root) {
    // Returns if no node with value found
    if (node === null) return node;
    
    // Traverse tree to find node with desired value, delete with helper method if value found
    if (value == node.value) {
      node = this.#removeNodeHelper(node);
    } else if (value < node.value) {
      node.left = this.delete(value, node.left)
    } else {
      node.right = this.delete(value, node.right);
    }
    return node;
  }

  find(value, node = this.root) {
    // Returns null if no tree is instantiated
    if (node == null) return null;

    // Returns node if value is found
    if (value == node.value) return node;

    // Steps through tree to find value in nodes
    if (value < node.value) return this.find(value, node.left); 
    if (value > node.value) return this.find(value, node.right); 
  }

  height(node) {
    // Returns if node does not exist 
    if (node === null) return 0;
    // Assign heights of each branch
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    // Return max height of longest branch
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // similar to find(), but returns the depth in tree of value, instead of the node
  depth(value, node = this.root) {
    if (value === node.value) return 0;
    if (value < node.value) return this.depth(value, node.left) + 1;
    if (value > node.value) return this.depth(value, node.right) + 1;
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


  //Private Methods
  
  #inOrderSuccessor(node) {
    let tmpNode = node;
    while(tmpNode.left) {
      tmpNode = tmpNode.left;
    }
    return tmpNode;
  }

  #removeNodeHelper(node) {
    // If two children, bring up lowest right node to replace deleted, and reorder right nodes to follow
    if (node.left && node.right) {
      const successorNode = this.#inOrderSuccessor(node.right);
      node.value = successorNode.value;
      node.right = this.delete(successorNode.value, node.right);
      return node;
    }
    // If one child, replace deleted node with child
    else {
      const replacementNode = node.left || node.right;
      node = null;
      return replacementNode;
    }
  }

}
import Tree from "./binarySearchTree.js";

// Test Array
const testArr = [1, 556, 556, 27, 4, 23, 8, 9, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Construct tree from array
const binaryTree = new Tree(testArr);

console.log(binaryTree)
binaryTree.prettyPrint(binaryTree.root) // Prints binary search tree with no duplicate values
console.log("-------------------------------------------")
binaryTree.insert(34);
binaryTree.prettyPrint(binaryTree.root) // Adds 34 to leaf of existing tree
console.log("-------------------------------------------")
binaryTree.delete(5);
binaryTree.prettyPrint(binaryTree.root) // Removes node 5 and reorders children
console.log("-------------------------------------------")
console.log(binaryTree.find(27)) // Node {value: 34, left: null, right: node}
console.log(binaryTree.find(9)) // Node {value: 34, left: Node, right: Node}
console.log(binaryTree.depth(7)) // 2
console.log("-------------------------------------------")
binaryTree.levelOrder(); // Returns array of tree values traverseed in level order [ ]
console.log('halt')
 

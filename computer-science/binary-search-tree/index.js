import Tree from "./binarySearchTree.js";

const simpleArr = [1, 4, 25, 66, 98, 150];

const testArr = [1, 556, 556, 27, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Tests
const binaryTree = new Tree(testArr);

console.log(binaryTree)
binaryTree.prettyPrint(binaryTree.root)
console.log("-------------------------------------------")
binaryTree.insert(34);
binaryTree.prettyPrint(binaryTree.root)
console.log("-------------------------------------------")
binaryTree.delete(6345);
binaryTree.prettyPrint(binaryTree.root)

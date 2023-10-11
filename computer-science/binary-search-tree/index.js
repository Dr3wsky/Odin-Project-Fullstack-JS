import Tree from "./binarySearchTree.js";

// Test Array
const testArr = [1, 556, 556, 27, 4, 23, 8, 9, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Construct tree from array
const binaryTree = new Tree(testArr);

binaryTree.prettyPrint(binaryTree.root) // Prints binary search tree with no duplicate values
console.log("-------------------------------------------")
binaryTree.insert(36);
console.log('Updated Tree:')
binaryTree.prettyPrint(binaryTree.root) // Adds 36 to leaf of existing tree
console.log("-------------------------------------------")
binaryTree.delete(4);
console.log('Updated Tree:')
binaryTree.prettyPrint(binaryTree.root) // Removes node 4 and reorders children
console.log("-------------------------------------------")
console.log(binaryTree.find(27)) // Node {value: 27, left: null, right: node}
console.log(binaryTree.find(9)) // Node {value: 9, left: Node, right: Node}
console.log(`Node depth is ${binaryTree.depth(7)}`) // Node depth is 2
console.log(`Node height is ${binaryTree.height(67)}`) //
console.log(`Root depth is ${binaryTree.depth(binaryTree.root)}`) //
console.log(`Root height is ${binaryTree.height(binaryTree.root)}`)

console.log("-------------------------------------------")
binaryTree.levelOrder(); // Returns array of tree values traverseed in level-order 
console.log(`Tree travesed in level-order is:       ${binaryTree.levelOrderList}`) // [9, 4, 67, 1, 7, 23, 556, 3, 8, 27, 324, 6345, 36]
console.log("-------------------------------------------")
binaryTree.preOrder(); // Returns array of tree values traverseed in preorder 
console.log(`Tree travesed in pre-order is:         ${binaryTree.preOrderList}`) // [9, 4, 1, 3, 7, 8, 67, 23, 27, 36, 556, 324, 6345]
console.log("-------------------------------------------")
binaryTree.postOrder(); // Returns array of tree values traverseed in post-order 
console.log(`Tree travesed in post-order is:        ${binaryTree.postOrderList}`) // [9, 67, 556, 6345, 324, 23, 27, 36, 4, 7, 8, 1, 3]
console.log("-------------------------------------------")
binaryTree.inOrder(); // Returns array of tree values traverseed in in-order 
console.log(`Tree travesed in inOrder is:           ${binaryTree.inOrderList}`) // [1, 3, 4, 7, 8, 9, 23, 27, 36, 67, 324, 556, 6345]


 

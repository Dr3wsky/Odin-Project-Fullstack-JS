import Tree from "./binarySearchTree.js";

// Utility funcs to create and add arrays for testing

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

// Add random array of numbers ot tree
function addNums(n, tree) {
    const arr = randomArray(n);
    for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
    };
}

function printOrders(tree) {
    console.log(`Tree travesed in level order is:       ${tree.levelOrderList}`)      // Returns array of tree values traverseed in level-order                          
    console.log(`Tree travesed in preorder is:          ${tree.preOrderList}`)        // Returns array of tree values traverseed in preorder 
    console.log(`Tree travesed in postorder is:         ${tree.postOrderList}`)       // Returns array of tree values traverseed in post-order                             
    console.log(`Tree travesed in inorder is:           ${tree.inOrderList}`)         // Returns array of tree values traverseed in in-order         
}


/* TESTING */

const binaryTree = new Tree(randomArray(14));                                               // Creates new tree
console.log("New Tree");                                                                    // Print visual representation of tree
binaryTree.prettyPrint(binaryTree.root);            
binaryTree.isBalanced() ? printOrders(binaryTree) : console.log("Tree is unbalanced");      // Test if tree is balanced
console.log("------------------------------------------------");                                           
addNums(15, binaryTree);                                                                    // Add random numbers to tree
console.log("Tree Additions");                                                              // Print visual representation of new tree
binaryTree.prettyPrint(binaryTree.root);            
binaryTree.isBalanced() ? printOrders(binaryTree) : console.log("Tree is unbalanced");      // Test if tree is balanced
console.log("------------------------------------------------");     
binaryTree.rebalance();                                                                     // Rebalance tree
console.log("Rebalanced Tree");                                                             // Print visual representation of new tree
binaryTree.prettyPrint(binaryTree.root);            
binaryTree.isBalanced() ? printOrders(binaryTree) : console.log("Tree is unbalanced");      // Test if tree is balanced
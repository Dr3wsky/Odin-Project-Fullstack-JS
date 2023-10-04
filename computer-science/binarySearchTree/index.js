import LinkedList from "./linkedList.js";

// Tests
const linkedList = new LinkedList();

// Populate linkedList
linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");

// Returns size of list
console.log(linkedList.size()); // 3

// Returns list head and tail
console.log(linkedList.head()); // return head Node
console.log(linkedList.tail()); // Node { value: 'test3', nextNode: null }

// Returns node at index value
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index

// Removes last node and checks if worked
linkedList.pop();
console.log(linkedList.at(2)); // There is no item for this index

// Cast list values to string
console.log(linkedList.toString()); // ( test1 ) -> ( test2 ) -> null

// Find indicies and values of values 
console.log(linkedList.contains("test1")); // true
console.log(linkedList.find("test2")); // 1

// Populate list
linkedList.prepend("test3");
linkedList.insertAt("test4", 2);
console.log(linkedList.toString()); // ( test3 ) -> ( test1 ) -> ( test4 ) -> ( test2 ) -> null
linkedList.insertAt("test5", 8);
console.log(linkedList.toString()); // ( test3 ) -> ( test1 ) -> ( test4 ) -> ( test2 ) -> ( test5 ) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // ( test3 ) -> ( test1 ) -> ( test2 ) -> ( test5 ) -> null


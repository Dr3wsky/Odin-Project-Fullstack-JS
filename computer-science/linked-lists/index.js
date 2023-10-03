import LinkedList from "./linkedList.js";

// Tests
const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
linkedList.prepend("test4");
console.log(`List is ${linkedList.size()} nodes long`);
// console.log(linkedList.head());
// console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.at(5));
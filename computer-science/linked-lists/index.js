import LinkedList from "./linkedList.js";

// Tests
const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
linkedList.prepend("test4");
console.log(linkedList.size())
import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.head != null) tmp = this.head;
    this.head = new Node(value);
    this.head.nextNode = tmp;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let tmp = this.head;
    let count = 0;
    while (tmp != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

}

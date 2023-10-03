import IsGenericDescriptor from "es-abstract/5/IsGenericDescriptor.js";
import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.listHead != null) tmp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = tmp;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let tmp = this.listHead;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let tmp = this.listHead;
    let count = 0;
    while (tmp != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() { 
    let tmp = this.listHead;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp;
  }

  at(index) {
    let tmp = this.listHead;
    for (let i = 0; i<index; i++) {
      tmp = tmp.nextNode;
      if (tmp == null) return "There is no item for this index"
    }
    return tmp;
  }


}

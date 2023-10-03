import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  // Add new node at start of list
  prepend(value) {
    let tmp = null;
    if (this.listHead != null) tmp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = tmp;
  }

  // Append new node to end of list
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

  // Returns size of list
  size() {
    let tmp = this.listHead;
    let count = 0;
    while (tmp != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  // Returns head of list
  head() {
    return this.listHead;
  }

  // Returns tail of list
  tail() { 
    let tmp = this.listHead;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp;
  }

  // returns node at desired index
  at(index) {
    let tmp = this.listHead;
    for (let i = 0; i<index; i++) {
      tmp = tmp.nextNode;
      if (tmp == null) return "There is no item for this index"
    }
    return tmp;
  }

  // removes last node of list
  pop() { 
    let cur = this.listHead;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  // Checks if list contains value
  contains(value) {
    let tmp = this.listHead;
    while (tmp != null) {
      if (tmp.value === value) return true
      tmp = tmp.nextNode;
    }
    return false;
  }

  // returns index of value in list
  find(value) {
    let tmp = this.listHead;
    let index = 0;
    while (tmp != null) {
      if (tmp.value === value) return index;
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }

  // Cast entire linked list to string
  toString() {
    let tmp = this.listHead;
    let strList = "";
    while (tmp != null) {
      strList += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    return (strList += "null");
  }

  // Inserts new node in middle of list at desired index
  insertAt(value, index) {
    if (this.listHead == null) this.prepend(value)
    else {
  let cur = this.listHead;
  let prev = null;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;
        if (cur == null) break; // if index is bigger than list, add node at end of list 
    }
    let tmp = new Node(value);
    prev.nextNode = tmp;
    tmp.nextNode = cur;
    }
  }

    // Removes node in middle of list at desired index
    removeAt(index) {
      if (this.listHead == null) return "List is already empty"
      else {
        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = cur;
          cur = cur.nextNode;
          if (cur == null) return "The list is shorter than this index";
        }
        prev.nextNode = cur.nextNode; // Gives current node pointer to previous node pointer, thus dropping the current node from list 
      }
    }

}

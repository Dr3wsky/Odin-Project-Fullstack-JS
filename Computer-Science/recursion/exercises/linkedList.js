// Define List
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Output list function recursive
function printListRecurs(list) {
    console.log(list.value)
    if (list.next) {
        printListRecurs(list.next)
    }
}

// Output list iterative
function printListIter(list){
    let temp = list;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

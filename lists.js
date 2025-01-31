// 1. Define the **Node Class/Factory**
//    - Create a constructor that takes an optional `value`
//    - Initialize `value` and `nextNode` properties
//      - Default `nextNode` to `null`

class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null; 
    }
  }
  
//   2. Define the **LinkedList Class/Factory**
//   - Initialize properties: `head`, `tail`
export  class LinkedList {
    constructor() {
      this._head = null; 
      this._tail = null; 
      this.length = 0;
    }
    
    append(value) {                       // 3. **append(value)**
      const newNode = new Node(value)   //    - Create a new node with the given value

     if (this._head === null) {         //First scenarios: the list is empty - (`head === null`), set `head` and `tail` to the new node
      this._head = newNode;
      this._tail = newNode;
    } else {                             //Second scenarios:  it already has nodes - - Otherwise, set the `nextNode` of the current `tail` to the new node and update `tail`
      this._tail.nextNode = newNode;    //Link the current tail’s nextNode to the new node.
      this._tail = newNode;            //Update tail to the new node.
    }
    this.length++;
  }

    prepend(value) {
      const preNode = new Node(value)

      if (this._head === null) {     // If the list is empty, set both head and tail to the new node.
        this._head = preNode;
        this._tail = preNode;
      } else {                         // If the list is not empty, prepend the new node to the head.
        preNode.nextNode = this._head; // Point the new node's next to the current head - nextNode of the new node is set to the current head of the list
        this._head = preNode;         // Update the head to the new node.
      }
      this.length++;

    }
   
    size() {
      return this.length;
  }

    head() {
    return this._head;
  }

    tail() {
    return this._tail;
}

at(index) { // index means counting each step until it reaches the desired position
  if (index < 0 || index >= this.length ) return null;
  let current = this._head;
  for (let i = 0; i < index; i++) {
        current = current.nextNode
  }
  return current;

}

pop() {
  if (this._head === null) return;

  if (this._head === this._tail) {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return;
  }

  let current = this._head;
  while (current.nextNode.nextNode !== null ) {
     current = current.nextNode;
  }
  current.nextNode = null;
  this._tail = current;
  this.length--;
}

contains(value) {
  let current = this._head;
  while (current !== null) {
      if (current.value === value) return true;  //current node's value (current.value) is compared to the value we're searching for. If they match, the function immediately returns true, indicating that the value is found.
      current = current.nextNode;
  }
  return false; // indicating that the value is not present in the linked list.
}

find(value) {
  let current = this._head;
  let index = 0;
  while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
  }
  return null;
}

  toString(value) {
   let result = ''
    let current = this._head
    while (current !== null) {
      result += `(${current.value}) ->`;
      current = current.nextNode; 
    }
    result += 'null';
    return result;
  }

}



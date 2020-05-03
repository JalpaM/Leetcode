// Create Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty
    if(this.head === null) {
      this.head = head;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next; // Goes till last existing node
      }

      current.next = node; // adding node at the end
    }

    this.size++;
  }

  // Insert at
  insertAt(data, index) {
    if(index < 0 && index > this.size) return;

    if(index === 0) {
      this.insertFirst(data);
      return;
    }

    if(index  === this.size) {
      this.insertLast(data);
      return;
    }

    var count = 0;
    var node = new Node(data);
    var current = this.head;
    var previous;
    while(count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node; // set next element of previous node to newly added node
    this.size++;
  }

  // Get at index
  getAt(index) {
    var current = this.head;
    var count = 0;

    while(current) {
      if(count === index) {
        console.log(current);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if(index < 0 || index > this.size) return;

    var current, previous;
    var count = 0;
    current = this.head;

    if(index === 0) { // first node
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next; // removing current node by assigning current.next
    }

    this.size--;
  }

  // Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list node
  printListData() {
    var current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

var ll1 = new LinkedList();

ll1.insertFirst(100);
ll1.insertFirst(200);
ll1.insertFirst(300);
ll1.insertFirst(400);
ll1.insertLast(50);
ll1.insertLast(25);
ll1.insertAt(350, 1);
ll1.insertAt(250, 3);
ll1.getAt(4);
ll1.removeAt(6);
ll1.removeAt(9);
ll1.printListData();
ll1.clearList();

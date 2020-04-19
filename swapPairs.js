// 24. Swap Nodes in Pairs
/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

const swapPairs = (head) => {
  let preHead = new ListNode(null);
  preHead.next = head;
  let current = preHead.next;

  while(current.next !== null && current.next.next !== null) {
    let first_node = current.next;
    let second_node = current.next.next;

    first_node.next = second_node.next;
    current.next = second_node;
    current.next.next = first_node;
    current = current.next.next;
  }

  return preHead.next;
}

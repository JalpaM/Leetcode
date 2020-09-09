// 143. Reorder List
/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return;

  let l1 = head;
  let slow = head;
  let fast = head;
  let temp = head;

  while (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // diving list at the mid point
  temp.next = null;

  // reversing 2nd part of the list
  let l2 = reverse(slow);

  return merge(l1, l2);
};

var reverse = (head) => {
  let prev = null;

  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

var merge = (l1, l2) => {
  while (l1 !== null) {
    let l1_next = l1.next;
    let l2_next = l2.next;

    l1.next = l2;

    if (l1_next === null) {
      break;
    }

    l2.next = l1_next;
    l1 = l1_next;
    l2 = l2_next;
  }
};

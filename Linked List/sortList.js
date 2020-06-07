// 148. Sort List
/*
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:
Input: 4->2->1->3
Output: 1->2->3->4

Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/
// We are using Merge sort
// Time complexity for merge sort: O(n log n)
var sortList = head => {
  // Here, we are just sorting a list so no need to create new ListNode

  if(!head || !head.next) return head;

  // initially assign to the top of the list
  let temp = head;
  let slow = head;
  let fast = head;

  // this loop breaks when fast reaches the end of the list
  // Here, we are separating list in halves
  // head points to 1st item in the left List, temp points to right most of the left list
  // slow points to 1st item in the left List, fast points to right most of the left list
  while(fast !== null && fast.next !== null) {
    temp = slow; // previous element to slow
    slow = slow.next; // half of the fast which is initial of the 2nd list when fast reaches end of the list
    fast = fast.next.next;
  }

  temp.next = null; // as each list has last element point to null

  let left = sortList(head); // iterating for left side of list
  let right = sortList(slow); // as slow is the 1st element in the 2nd List

  return merge(left, right); // sort and merge two lists
}

var merge = (l1, l2) => {
  // need to create new ListNode as we are returning

  let l = new ListNode(null);
  const preHead = l;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      l.next = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l2 = l2.next;
    }

    l = l.next;
  }

  l.next = l1 || l2;

  return preHead.next;
}

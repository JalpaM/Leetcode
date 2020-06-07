// 24. Swap Nodes in Pairs
/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/
// Time Complexity: O(n)
// Space Complexity: O(1)
var swapPairs = function(head) {
    if (!head) return null;

    let newHead = new ListNode(null);
    newHead.next = head;
    let prev = newHead;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next
        second.next = first
        prev.next = second

        prev = first
    }

    return newHead.next
};

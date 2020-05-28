// 19. Remove Nth Node From End of List
/*
Given a linked list, remove the n-th node from the end of list and return its head.
Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.
Follow up:
Could you do this in one pass?
*/
var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(null);
    preHead.next = head;
    let slow = preHead;
    let fast = preHead;

    // 1->2->3->4->5
    // starting from 1, for loop goes till 4 as fast = fast.next
    for(let i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }

    while(fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // removing 4 from the list
    slow.next = slow.next.next;

    return preHead.next;
};

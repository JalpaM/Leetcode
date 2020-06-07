// 234. Palindrome Linked List
/*
Given a singly linked list, determine if it is a palindrome.
Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    // slow reaches half once fast reaches the end
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse slow so we can compare slow and fast
    slow = reverse(slow);
    fast = head; // set to initial point

    let copySlow = slow;

    while(slow !== null) {
        if(slow.val !== fast.val) {
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    reverse(copySlow);

    if(head === null || slow === null) {
      return true;
    }

    return false;
};

//  1 -> 2 -> 3
var reverse = head => {
    let prev = null;

    while(head !== null) {
        let next = head.next; // 2
        head.next = prev;     // 1 -> null
        prev = head;          // prev = 1
        head = next;          // head = 2 => 2 -> 1 -> null then loop again
    }
    return prev;              // 3 -> 2 -> 1 -> null
}

// 23. Merge k Sorted Lists
/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    while(lists.length > 1) {
        const l1 = lists.shift(); // pop list from front of the array
        const l2 = lists.shift();

        lists.push(merge(l1, l2));
    }

    return lists[0];  // merging all lists to 1st list of the array
};

var merge = (l1, l2) => {
    let l = new ListNode(null);
    const prehead = l;

    while(l1 != null && l2 != null) {
        if(l1.val < l2.val) {
            l.next = l1;
            l1 = l1.next;
        } else {
            l.next = l2;
            l2 = l2.next;
        }

        l = l.next;
    }

    l.next = l1 || l2;

    return prehead.next;
}

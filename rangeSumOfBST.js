// 938. Range Sum of BST
/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

var rangeSumBST = function(root, L, R) {
    if(root === null || root.length === 0) return 0;
    let sum = 0;

    const go = (node) => {
      if(node === null) return sum;

      while(node.length) {
        if(node.val >= L && node.val <= R) {
          sum += node.val;
        }

        go(node.left); // traversing left portion of node
        go(node.right); // traversing right portion of node
      }
    }

    go(root);

    return sum;
};

// 124. Binary Tree Maximum Path Sum
/*
Given a non-empty binary tree, find the maximum path sum.
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:
Input: [1,2,3]

       1
      / \
     2   3
Output: 6

Example 2:
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7
Output: 42
*/

var maxPathSum = root => {
  if(!root || root === null) return 0;

  let max_sum = Number.NEGATIVE_INFINITY;

  const go = node => {
    if(!node || node === null) return 0;

    let left = Math.max(0, go(node.left));
    let right = Math.max(0, go(node.right));
    max_sum = Math.max(max_sum, left + right + node.val);

    return Math.max(left, right) + node.val;
  }

  go(root);

  return max_sum;
}

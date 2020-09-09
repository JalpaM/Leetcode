/*
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.
The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:
Input:

           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
*/

var widthOfBinaryTree = function (root) {
  if (root === null) return 0;

  let queue = [[root, 0, 0]];
  let curDepth = 0;
  let left = 0;
  let maxWidth = 0;

  while (queue.length) {
    const [node, depth, col] = queue.shift();

    if (node.left) {
      queue.push([node.left, depth + 1, col * 2]);
    }

    if (node.right) {
      queue.push([node.right, depth + 1, 2 * col + 1]); // root is also part of it so added 1
    }

    if (curDepth != depth) {
      curDepth = depth;
      left = col;
    }

    maxWidth = Math.max(col - left + 1 || 1, maxWidth);
  }

  return maxWidth;
};

// 958. Check Completeness of a Binary Tree
/*
Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:
      4
    /   \
  7     2
 / \   /
9   6 3

Input: [4,7,2,9,6,3]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
Example 2:

    4
  /  \
 7    2
/ \    \
9  6   3
Input: [4,7,2,9,6,null,3]
Output: false
Explanation: The node with value 7 isn't as far left as possible.

Note:
The tree will have between 1 and 100 nodes.
*/
// Time Complexity: O(n)
// Space Complexity: O(1)

// return false if we encounter null node and then any node with value
var isCompleteTree = root => {
  const queue = [root];
  let null_node = false;

  while(queue.length) {
    let current = queue.shift();

    if(current === null) {
      null_node = true;
    } else {
      if(null_node) return false;

      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return true;
}

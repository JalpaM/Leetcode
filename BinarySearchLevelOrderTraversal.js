// 0102. Binary Tree Level Order Traversal
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//    3
//   / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Time O(n)
// Space O(n)

function levelOrderTraversal(root) {
  let result = [];

  const go = (node, level) => {
    if(node === null) return;

    // for each level creating an array
    if(result.length === level) result.push([]);
    result[level].push(node.val);

    go(node.left, level + 1);
    go(node.right, level + 1);
  }

  go(root, 0);
  return result;
}

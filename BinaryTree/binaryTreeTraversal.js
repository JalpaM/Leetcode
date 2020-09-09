/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/
var levelOrderBottom = function (root) {
  let res = [];

  const go = (node, level) => {
    if (node === null) return;

    if (res.length === level) res.push([]);
    res[level].push(node.val);

    go(node.left, level + 1);
    go(node.right, level + 1);
  };

  go(root, 0);

  let left = 0;
  let right = res.length - 1;

  while (left < right) {
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }

  return res;
};

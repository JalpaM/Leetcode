// 103. Binary Tree Zigzag Level Order Traversal
/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/
var zigzagLevelOrder = function(root) {
    let res = [];

    var go = (node, level) => {
        if(node === null) return;

        if(res.length === level) res.push([]);

        if(level % 2 === 0) {
            res[level].push(node.val);
        } else {
            res[level].unshift(node.val);
        }

        go(node.left, level + 1);
        go(node.right, level + 1);
    }

    go(root, 0);
    return res;
};

// 250. Count Univalue Subtrees
/*
Given a binary tree, count the number of uni-value subtrees.
A Uni-value subtree means all nodes of the subtree have the same value.
Example :
Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    if(!root) return 0;
    let count = 0;

    const go = (root) => {
        if(!root) return;

        if(isUniValue(root, root.val)) {
            count++;
        }

        go(root.left);
        go(root.right);

    }

    go(root);
    return count;
};

var isUniValue = (root, value) => {
    if(!root) return true;

    if(!root.left && !root.right && value === root.val) return true;
    return (root.val === value && isUniValue(root.left, root.val) && isUniValue(root.right, root.val));
}

// 129. Sum Root to Leaf Numbers
/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
An example is the root-to-leaf path 1->2->3 which represents the number 123.
Find the total sum of all root-to-leaf numbers.
Note: A leaf is a node with no children.

Example:
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Example 2:
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
*/
var sumNumbers = function(root) {
  // create collection to store end value
  let result = [];

  // return asap with 0 if no input provided
  if (!root) return 0;

  // define traverse function
  // which takes node and a value(initially empty string) as a parameters
  function traverse(node, value = "") {

    // if there is node and a value - concatinate node val to a string
    if (node && (node.val || node.val === 0)) value += node.val;

    // if there is node but no left and no right node
    // means we encounter leaf - convert value string to a number
    // and push it to result collection
    if (node && !node.left && !node.right) result.push(Number(value));

    // repeat same if there is a node with either left or right node
    if (node && node.left) traverse(node.left, value);
    if (node && node.right) traverse(node.right, value);
  }

  // initial invocation of traverse
  traverse(root);

  // return sum of all elements in collection
  return result.reduce((acc, n) => acc + n, 0);
};

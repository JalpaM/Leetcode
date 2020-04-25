// Input:
//       3
//      / \
//     6   8
//    /\    \
//   2 11   13
//    / \   /
//   9  5  7
//
// n1 = 2, n2 = 5
// Output: 6

// Time complexity: O(n)
class Node {
  lowestCommonAncestorBinaryTree(root, n1, n2) {
    if(root === null) return null;
    if(root === n1 || root === n2) return root;

    let left = lowestCommonAncestorBinaryTree(root.left, n1, n2);
    let right = lowestCommonAncestorBinaryTree(root.right, n1, n2);

    if(left !== null && right !== null) return root; // if value returns from both side are true then root is an ancestor
    if(left === null && right === null) return null; // if neither of the node is found in left and right then return null

    return left !== null ? left : right;
  }
}

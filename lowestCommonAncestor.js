// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

function lowestCommonAncestor(root, p, q) {
  while (root !== null) {
    // go to root.left if p and q has value lesser than root
    if(root.val >= p && root.val >= q) {
      return lowestCommonAncestor(root.left, p, q);
    }

    // go to root.right if p and q has value greater than root
    else if(root.val < p && root.val < q) {
      return lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
  }
}

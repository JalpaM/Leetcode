// Input:
//       5
//      / \
//     4  8
//    /  / \
//  11  13 4
//  / \     \
// 7  2     1
// sum: 22
// 5 -> 4 -> 11 -> 2

// Time complexity: O(n)

function hasPathSum(root, sum) {
    // return false for root as null
    if(root === null || root.length === 0) {
      return false;
    }

    // return true if leaf node is null and sum - root value as 0
    else if(root.left === null && root.right === null && (sum - root.val === 0)) {
      return true;
    }

    // do recursive call if not a leaf node
    else {
      return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}

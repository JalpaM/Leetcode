// Time Complexity - O(N)

function isValidBST(root) {
    return validate(root, null, null); // initially taking (root, max, min)
}

function validate(root, max, min) {
    // true if root is null
    if(root === null) {
        return true;
    }
    // false if root is less than left node or root is greater than right node
    else if((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    // recursive where left node should have value less than root and right node should have value greater than root
    else {
        return (validate(root.left, root.val, min)) && (validate(root.right, max, root.val));
    }
}



isValidBST([2,1,3]) // true -> 2 is root, 1 is left and 3 is right node
isValidBST([6, 1, 4, null, null, 2, 7]) // false

// 152. Maximum Product Subarray
/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
var maxProduct = function(nums) {
    let max = nums[0];
    let localMax = nums[0];

    for(let i = 1; i < nums.length - 1; i++) {
        localMax = localMax * nums[i + 1];

        if(localMax < 0) {
            localMax = nums[i + 1];
        }

        max = Math.max(max, localMax);
    }

    return max;
};

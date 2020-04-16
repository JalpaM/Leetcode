// 283. Move Zeroes
/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order
of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
var moveZeroes = function(nums) {
    var index = 0;

    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index++] = nums[i]
        }
    }

    for(var i = index; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};

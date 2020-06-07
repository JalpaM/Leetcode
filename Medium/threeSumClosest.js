// 16. 3Sum Closest
/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
    let res = nums[0] + nums[1] + nums[nums.length - 1];
    let nums = nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        let l = i + 1;
        let r = nums.length - 1;

        while(l < r) {
            const b = nums[l];
            const c = nums[r];
            const sum = a + b + c;

            if(sum > target) {
                r--;
            } else {
                l++;
            }

            if(Math.abs(res - target) > Math.abs(sum - target)) {
                res = sum;
            }
        }
    }
    return res;
};

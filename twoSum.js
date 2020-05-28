// 1. Two Sum
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
// Time Complexity: O(n)
var twoSum = function(nums, target) {
    var len = nums.length;
    var hashT={};
    for(var i = 0; i < len; i++) {
      const diff = target - nums[i];
      if(hashT[diff] != null) return [hashT[diff], i];
      hashT[nums[i]]=i;
    }
    return [];
};

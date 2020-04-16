// 1. Two Sum
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum1 = function(nums, target) {
    var len = nums.length;

    var hashT={};
    for(var i = 0; i <len; i++)
    {
         if(hashT[target - nums[i]] === 0)
         {
            return [hashT[target - nums[i]], i];
         }
         hashT[nums[i]]=i;
    }
    return [];
};

// OR

function twoSum(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var mid = left + Math.floor((right - left)/2);

    while(left <= right) {
        if(arr[mid] + arr[mid - 1] === target) {
            return [arr[mid], arr[mid-1]];
        } else if(arr[mid] + arr[mid - 1] > target) {
            mid = mid - 1;
        } else {
            mid = mid + 1;
        }
    }

    return [];
}

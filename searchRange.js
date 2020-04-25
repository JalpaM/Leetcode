// 34. Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/
// Binary search has time complexity of O(log n)
// Always use binary search for sorted array and compare value with target
var searchRange = function(nums, target) {
    let res = [];
    res[0] = findStartIndex(nums, target);
    res[1] = findLastIndex(nums, target);

    return res;
};

var findStartIndex = (nums, target) => {
    let index = -1;  // can't take index as 0 as other array element can have that index
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if(nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        if(nums[mid] === target) index = mid;
    }

    return index;
}

var findLastIndex = (nums, target) => {
    let index = -1; // can't take index as 0 as other array element can have that index
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if(nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        if(nums[mid] === target) index = mid;
    }

    return index;
}

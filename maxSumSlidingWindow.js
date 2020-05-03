/*
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sum of sliding window.

Follow up:
Could you solve it in linear time?

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: 16

Explanation:[3, 6, 7]
*/

// Time Complexity: O(n)
var maxSumSlidingWindow = function(nums, k) {
    let max = 0;
    let localMax = 0;

    for(let i = 0; i < k; i++) {
        localMax += nums[i]; // addition of elements 1 less than k size window
    }

    for(let j = k; j < nums.length; j++) {
        localMax += nums[j] - nums[j - k]; // adding next element and removing 1st element of window
        max = Math.max(max, localMax);
    }

    return max;
}

// Time Complexity: O(n * k)
var maxSumSlidingWindow1 = function(nums, k) {
    let max = 0;

    for(let i = 0; i <= nums.length - k; i++) {
      let localMax = 0;

      for(let j = i; j < i + k; j++) {
        localMax += nums[j];
      }

      max = Math.max(max, localMax);
    }

    return max;
};

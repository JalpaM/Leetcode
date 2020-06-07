// 209. Minimum Size Subarray Sum
/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/

var minSubArrayLen = function(s, nums) {
  let result = Number.MAX_VALUE;
  let left = 0;
  let val_max = 0;

  for(let i = 0; i < nums.length; i++) {
    val_max += nums[i];

    while(val_max >= sum) {
      result = Math.min(result, i + 1 - left);
      val_max -= nums[left];
      left++;
    }
  }

  return result !== Number.MAX_VALUE ? result : 0;
}

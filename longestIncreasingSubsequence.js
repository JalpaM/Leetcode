// 300. Longest Increasing Subsequence
/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

// This is dynamic programming with Binary Search so time complexity: O(n log n)
var lengthOfLIS = function(nums) {
    if(nums.length === 0 || nums === null) return 0;

    let tails = [nums[0]];

    for(const n of nums) {
        let left = 0;
        let right = tails.length;

        while(left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if(tails[mid] < n) {
                left = mid + 1
            } else {
                right = mid;
            }
        }

        tails[right] = n;
    }

    return tails.length;
};

// Dynamic programming with O(n^2)
var lengthOfLIS1 = nums => {
  if(nums.length === 0 || nums === null) return 0;

  let dp = new Array(nums.length).fill(1);

  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[j] > nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...dp);
}

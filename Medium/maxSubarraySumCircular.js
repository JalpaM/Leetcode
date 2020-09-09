// 918. Maximum Sum Circular Subarray
/*
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.
Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)
Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does
not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Example 1:
Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

Example 2:
Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

Example 3:
Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Example 4:
Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Example 5:
Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1


Note:

-30000 <= A[i] <= 30000
1 <= A.length <= 30000
*/
var maxSubarraySumCircular = (A) => {
  let max_sum = Number.NEGATIVE_INFINITY;
  let min_sum = Number.POSITIVE_INFINITY;
  let arr_sum = 0;
  let localMax = 0;
  let localMin = 0;

  for (let i = 0; i < A.length; i++) {
    arr_sum += A[i];

    localMax += A[i];
    // assign max_sum to higher value of existing max_sum or localMax
    max_sum = max_sum > localMax ? max_sum : localMax;
    // if localMax has -ve value then reset localMax to 0
    localMax = localMax > 0 ? localMax : 0;

    localMin += A[i];
    // assign min_sum to smaller value of existing min_sum or localMin
    min_sum = min_sum < localMin ? min_sum : localMin;
    // if localMin has +ve value then reset localMin to 0
    localMin = localMin < 0 ? localMin : 0;
  }

  // return max_sum when total sum of an array is equal to min_sum
  if (arr_sum === min_sum) return max_sum;
  return Math.max(max_sum, arr_sum - min_sum);
};

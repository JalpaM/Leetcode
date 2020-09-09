// 977. Squares of a Sorted Array
/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/
var sortedSquares = function (A) {
  let left = 0;
  let right = A.length - 1;
  let result = new Array(A.length);

  for (let i = A.length - 1; i >= 0; i--) {
    if (Math.abs(A[left]) > A[right]) {
      result[i] = A[left] * A[left];
      left++;
    } else {
      result[i] = A[right] * A[right];
      right--;
    }
  }

  return result;
};

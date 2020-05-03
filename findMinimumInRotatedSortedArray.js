// 153. Find Minimum in Rotated Sorted Array
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
You may assume no duplicate exists in the array.

Example 1:
Input: [3,4,5,1,2]
Output: 1

Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0
*/
// Time complexity: O(log n) - Binary search
var findMin = nums => {
  if(nums.length === 0) return -1;
  if(nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if(mid > 0 && nums[mid] < nums[mid - 1]) { // if mid has smaller value then mid -1 then mid is the smallest as array is sorted
      return nums[mid];
    } else if(nums[left] <= nums[mid] && nums[right] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left];
}

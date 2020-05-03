// 74. Search a 2D Matrix
/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

Example 2:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/
// Matrix is sorted so can use Binary search
// Time Complexity: O(log n)
var searchMatrix = (matrix, target) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let left = 0;
  let right = rows * columns - 1; // consider rows as 3 and columns as 4 like above so right will be 11

  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // mid_point for matrix
    let mid_point = matrix[Math.floor(mid / columns)][mid % columns];

    if(mid_point === target) {
      return true;
    } else if(mid_point < target) {
      left = mid + 1;
    } else if(mid_point > target) {
      right = mid - 1;
    }
  }

  return false;
}

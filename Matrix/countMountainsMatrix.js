// Find the count of mountains in a given Matrix

/*
Given a 2D square matrix of size N X N, the task is to count the number of mountains in the matrix.
An element in a matrix is said to be a mountain when all the surrounding elements (in all 8 directions) are smaller than the given element.

Input: matrix =
{ { 7, 8, 9 },
  { 1, 2, 3 },
  { 4, 5, 6 } }
Output: 2
Explanation
Mountain elements = 6 (2, 3 and 5)
and 9 (8, 2, and 3)
*/

var countMountains = grid => {
  if(grid.length === 0 || grid === null) return 0;

  let count = 0;

  // creating (N + 2) x (N + 2) matrix
  let arr = [...Array(grid.length + 2)].map(() => Array(grid[0].length + 2));

  for(let i = 0; i < grid.length + 2; i++) {
    for(let j = 0; j < grid[0].length + 2; j++) {
      if(i === 0 || j === 0 || i === grid.length + 1 || j === grid[0].length + 1) {
        // setting 1st row, last row, 1st column and last column with value 0
        arr[i][j] = 0;
      } else {
        // ith and jth value of arr are 1 greater than ith and jth value of grid
        arr[i][j] = grid[i - 1][j - 1];
      }
    }
  }

  for(let i = 1; i < grid.length + 1; i++) {
    for(let j = 1; j < grid[0].length + 1; j++) {
      if(arr[i][j] > arr[i - 1][j] &&
        arr[i][j] > arr[i - 1][j - 1] &&
        arr[i][j] > arr[i - 1][j + 1] &&
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i + 1][j - 1] &&
        arr[i][j] > arr[i + 1][j + 1] &&
        arr[i][j] > arr[i][j + 1] &&
        arr[i][j] > arr[i][j - 1]) {
          count++;
        }
    }
  }

  return count;
}

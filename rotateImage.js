// 48. Rotate Image
/*
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/

var rotate = function(matrix) {
  let N = matrix.length;

//     [                    [
//       [1,2,3],               [1, 4, 7],
//       [4,5,6],     ==>       [2, 5, 8],
//       [7,8,9]                [3, 6, 9],
//     ]                    ]

  // This code converts each column to row
  for(let i = 0; i < N; i++) {
    for(let j = i; j < N; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

//     [                    [
//       [1,4,7],               [7, 4, 1],
//       [2,5,8],     ==>       [8, 5, 2],
//       [3,6,9]                [9, 6, 3],
//     ]                    ]

  // Need to travers each row but need to travers half the number of columns as we are swaping with other half of the columns
  for(let i = 0; i < N; i++) {  //
    for(let j = 0; j < Math.floor(N / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][N - 1 - j];  // N - 1 is the total number of columns and subtracting current column to swap with
      matrix[i][N - 1 - j] = temp;
    }
  }

  return matrix;
};

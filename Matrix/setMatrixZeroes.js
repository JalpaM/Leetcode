// 73. Set Matrix Zeroes
/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:
Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2:
Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

Follow up:
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
// Time Complexity: O(mn)
var setZeroes = function(matrix) {
    if(matrix.length === 0 || matrix === null) return;

    let first_row = false;
    let first_column = false;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                if(i === 0) first_row = true;
                if(j === 0) first_column = true;

                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // This will set 0 for other than 0th row and 0th column
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[i].length; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // setting 0 for first row
    if(first_row) {
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    // setting 0 for first column
    if(first_column) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
};

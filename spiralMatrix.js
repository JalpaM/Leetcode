// 54. Spiral Matrix
/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
var spiralOrder = function(matrix) {
    if(matrix.length === 0 || matrix === null) return [];

    let m = matrix.length;
    let n = matrix[0].length;
    let row_end = m - 1;
    let column_end = n - 1;
    let column_begin = 0, row_begin = 0;
    let res = [];

    while(column_begin <= column_end && row_begin <= row_end) {
        // print 1st row
        for(let i = column_begin; i <= column_end; i++) {
            res.push(matrix[row_begin][i]);
        }
        row_begin++; // incrementing row

        // print last column - row_begin have next row value
        for(let i = row_begin; i <= row_end; i++) {
            res.push(matrix[i][column_end]);
        }
        column_end--; // moving column_end to previous to last column of initial matrix

        if(row_begin <= row_end) {
          // print last row - comparing i >= l and not with 0 because it's also getting used for inner matrix
            for(let i = column_end; i >= column_begin; i--) {
                res.push(matrix[row_end][i]);
            }
            row_end--; // decrementing and set last row to previous to last
        }

        if(column_begin <= column_end) {
          // print 1st column
            for(let i = row_end; i >= row_begin; i--) {
                res.push(matrix[i][column_begin]);
            }
            column_begin++; // incrementing l so it goes to inner matrix
        }
    }

    return res;
};

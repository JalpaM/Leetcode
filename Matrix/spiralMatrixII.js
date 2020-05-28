// 59. Spiral Matrix II
/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/
var generateMatrix = function(n) {
    let row_end = n - 1;
    let column_end = n - 1;
    let row_begin = 0, column_begin = 0;
    let matrix = [...Array(n)].map(() => Array(n)); // creating n x n matrix
    let counter = 1;

    while(column_begin <= column_end && row_begin <= row_end) {
        // print 1st row
        for(let i = column_begin; i <= column_end; i++) {
            matrix[row_begin][i] = counter++;
        }
        row_begin++; // incrementing row

        // print last column - k have next row value
        for(let i = row_begin; i <= row_end; i++) {
            matrix[i][column_end] = counter++;
        }
        column_end--; // moving last_column to previous to last column of initial matrix

        if(row_begin <= row_end) {
          // print last row - comparing i >= l and not with 0 because it's also getting used for inner matrix
            for(let i = column_end; i >= column_begin; i--) {
                matrix[row_end][i] = counter++;
            }
            row_end--; // decrementing and set last row to previous to last
        }

        if(column_begin <= column_end) {
          // print 1st column
            for(let i = row_end; i >= row_begin; i--) {
                matrix[i][column_begin] = counter++;
            }
            column_begin++; // incrementing l so it goes to inner matrix
        }
    }

    return matrix;
};

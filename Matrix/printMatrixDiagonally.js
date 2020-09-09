/*
Input: [[ 1,  2,  3,  4],
        [ 6,  7,  8,  9],
        [11, 12, 13, 14],
        [16, 17, 18, 19]]

Output: [1, 6, 2, 11, 7, 3, 16, 12, 8, 4, 17, 13, 9, 18, 14, 19]
*/
// 1
// 6 2
// 11 7 3
// 16 12 8 4
// 17 13 9
// 18 14
// 19
// rows = 4, columns = 4
// total traversals are: rows + columns - 1, (16 12 8 4) traversal can count from initial as 1st column or last row
// initial element of first 4 traversals are 1st column and next 3 traversals are last row elements
// traversal happens in a way where row is decrementing by 1 and column is incrementing by 1

var diagonalMatrix = (matrix) => {
  let row = matrix.length; // rows
  let column = matrix[0].length; // columns
  let res = [];

  // 1st column element traversal
  for (let k = 0; k <= row - 1; k++) {
    let i = k;
    let j = 0;

    // till it doesn't reach 1st row
    while (i >= 0) {
      res.push(matrix[i][j]);
      i = i - 1;
      j = j + 1;
    }
  }

  // last row element traversal but not considering 1st element as it is already done as part of 1st column
  for (let k = 1; k <= column - 1; k++) {
    let i = row - 1; // considering from last row
    let j = k;

    while (j <= column - 1) {
      // traversal till it reaches last column element
      res.push(matrix[i][j]);
      i = i - 1;
      j = j + 1;
    }
  }

  return res;
};

// 498. Diagonal Traverse
/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
*/
// direction = 1 means up-right traversing and direction = -1 means bottom-left traversing
// going up-right, row value is decremented by 1 and column value is incremented by 1
// going bottom-left, row value is incremented by 1 and column value is decremented by 1
var diagonalMatrix = matrix => {
  let m = matrix.length; // rows
  let n = matrix[0].length; // columns
  let res = [];
  let row = 0, column = 0, direction = 1;

  while(res.length != m * n) {
    res.push(matrix[row][column]);
    let nr = row - direction, nc = column + direction;
    let outBound = (nr < 0 || nr > m - 1 || nc < 0 || nc > n - 1);

    if(outBound) {
      if(direction === 1) {  // going up-right
        if(nc === n) row++;  // incrementing row when up-right traversal reaches end of the matrix column
        else column++;
      } else { // going bottom-left
        if(nr === m) column++; // incrementing cloumn when bottom-left traversal reaches end of the matrix row
        else row++;
      }
      direction = -direction;  // alter the direction value so row and column value changes
    } else {
      row = nr;
      column = nc;
    }
  }

  return res;
}

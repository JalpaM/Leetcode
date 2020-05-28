// Given a M x N matrix which is row wise and column wise sorted (with all strictly increasing elements in any row or column),
// report all occurences of a given element in it in linear time

// var matrix = [
//   [1,   3,  4, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// target: 3
// Output: [[2, 0], [0, 1]]

var findElement = (matrix, target) => {
    if(matrix.length === 0 || matrix === null) return [];

    let res = [];
    let row = matrix.length - 1;
    let col = 0;

    while(row >= 0 && col <= matrix[0].length - 1) {
        if(matrix[row][col] > target) {
            row--;
        } else if(matrix[row][col] < target) {
            col++;
        } else {
            res.push([row, col]);
            row--;
            col++;
        }
    }

    return res;
}

// Given a M x N matrix and two coordinates (p,q) and (r,s) which represents top-left and bottom-right coordinates
// of a sub-matrix of the given matrix, calculate the sum of all elements present in the sub-matrix.
//
// Here, 0 <= p <= r <= M and 0 <= q <= s <= N.
// [
//   [0, 2, 5, 4, 1],
//   [4, 8, 2, 3, 7],
//   [6, 3, 4, 6, 2],
//   [7, 3, 1, 8, 3],
//   [1, 5, 7, 9, 4]
// ]
//(p, q) = (1, 1)
//(r, s) = (3, 3)

var findSubmatrixSum = (matrix, p, q, r, s) => {
  let M = matrix.length;
  let N = matrix[0].length;
  let total = 0;
  let sum = [...Array(M)].map(() => Array(N));

  sum[0][0] = matrix[0][0];

  // set value for 1st row
  for(let i = 1; i < M; i++) {
    sum[i][0] = matrix[i][0] + sum[i - 1][0];
  }

  // set value for 1st column
  for(let j = 1; j < N; j++) {
    sum[0][j] = matrix[0][j] + sum[0][j - 1];
  }

  // set value for other matrix values
  for(let i = 1; i < M; i++) {
    for(let j = 1; j < N; j++) {
      sum[i][j] = matrix[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
  }

  total = sum[r][s];

  if(q - 1 >= 0) total -= sum[r][q - 1];
  if(p - 1 >= 0) total -= sum[p - 1][s];
  if(p - 1 >= 0 && q - 1 >= 0) total += sum[p - 1][q - 1];

  return total;
}

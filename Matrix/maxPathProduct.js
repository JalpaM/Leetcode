// Path with maximum product in 2-d array
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// output: 2016
// 1 -> 4 -> 7 -> 8 -> 9
// Similar to minimum Path Sum problem
// Need to find maximum so dynamic programming is a way to solve the problem

var maxPathProduct = grid => {
    if(grid.length === 0 || grid === null) return 1;

    let dp = [...Array(grid.length)].map(() => Array(grid[0].length));

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            dp[i][j] = grid[i][j];

            // getting grid value from previous row or previous column
            if(i > 0 && j > 0) {
                dp[i][j] *= Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else if(i > 0) {
                // getting grid value from previous row
                dp[i][j] *= dp[i - 1][j];
            } else if(j > 0) {
                // getting grid value from previous column
                dp[i][j] *= dp[i][j - 1];
            }
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
}

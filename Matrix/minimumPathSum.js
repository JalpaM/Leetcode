// 64. Minimum Path Sum
/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/
var minPathSum = function(grid) {
    if(grid.length === 0 || grid === null) return 0;

     // creating m x n array
    var dp = [...Array(grid.length)].map(() => Array(grid[0].length));

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            // setting the currently visiting element as dp
            dp[i][j] = grid[i][j];

            // getting grid value from previous row or previous column
            if(i > 0 && j > 0) {
                dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
            } else if(i > 0) {
                // getting grid value from previous row
                dp[i][j] += dp[i - 1][j];
            } else if(j > 0) {
                // getting grid value from previous column
                dp[i][j] += dp[i][j - 1];
            }
        }
    }

    return dp[dp.length - 1][dp[0].length - 1];
};

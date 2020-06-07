// Maximum size sub matrix with all 1's

// [                      [
//   [0 0 1 1 1],           [0 0 1 1 1],
//   [1 0 1 1 1],           [1 0 1 2 2],
//   [0 1 1 1 1],  ==>      [0 1 1 2 3],
//   [1 0 1 1 1],           [1 0 1 2 3]
// ]                      ]

// Here, 3 is the Maximum size of sub matrix
// As per the problem statement, need to find the maximum so it's a tip to use dynamic programming

var maxSizeSubMatrix = arr => {
  // Creating 2D array
  let dp = [...Array(arr.length)].map(() => Array(arr.length));
  let max = 0;

    // setting the 1st row as input array's 1st row
    for(let i = 0; i < arr.length; i++) {
      dp[i][0] = arr[i][0];

      if(dp[i][0] === 1) {
        max = 1;
      }
    }

    // setting the 1st column as input array's 1st column
    for(let j = 0; j < arr[0].length; j++) {
      dp[0][j] = arr[0][j];

      if(dp[0][j] === 1) {
        max = 1;
      }
    }

    for(let i = 1; i < arr.length; i++) {
      for(let j = 1; j < arr[i].length; j++) {
        // ignoring value of 0
        if(arr[i][j] === 0) {
          dp[i][j] = 0;
        }

        // taking the minimum and add current '1'
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);

        if(dp[i][j] > max) {
          max = dp[i][j];
        }
      }
    }

    return max;
}

// Maximum size sub matrix with all 1's

// [                      [
//   [ 0 0 1 1 1 ],         [0 0 1 1 1],
//   [ 1 0 1 1 1 ],         [1 0 1 2 2],
//   [ 0 1 1 1 1 ],  ==>    [0 1 1 2 3],
//   [ 1 0 1 1 1 ],         [1 0 1 2 3]
// ]                      ]

// Here, 3 is the Maximum size of sub matrix
// As per the problem statement, need to find the maximum so it's a tip to use dynamic programming

var maxSizeSubMatrix = arr => {
  // Creating 2D array
  let res = [...Array(arr.length)].map(() => Array(arr.length));
  let max = 0;

    // setting the 1st row as input array's 1st row
    for(let i = 0; i < arr.length; i++) {
      res[i][0] = arr[i][0];

      if(res[i][0] === 1) {
        max = 1;
      }
    }

    // setting the 1st column as input array's 1st column
    for(let j = 0; j < arr[0].length; j++) {
      res[0][j] = arr[0][j];

      if(res[0][j] === 1) {
        max = 1;
      }
    }

    for(let i = 1; i < arr.length; i++) {
      for(let j = 1; j < arr[i].length; j++) {
        // ignoring value of 0
        if(arr[i][j] === 0) {
          res[i][j] = 0;
        }

        // taking the minimum and add current '1'
        res[i][j] = 1 + Math.min(res[i][j - 1], res[i - 1][j], res[i - 1][j - 1]);

        if(res[i][j] > max) {
          max = res[i][j];
        }
      }
    }

    return max;
}

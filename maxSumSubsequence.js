// Find the maximum sum subsequence

// [4, 6, 1, 3, 8, 4, 6]
// Output: 18 => [4, 6, 8]
// This differs from longest subsequence as it gives an output as [1, 3, 4, 8] => 16

var maxSumSubsequence = arr => {
  let temp = new Array(arr.length);

  for(let i = 0; i < arr.length; i++) {
    temp[i] = arr[i];
  }

  for(let i = 0; i < temp.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] > arr[j]) {
        // taking temp from jth index and value of arr from ith and storing at ith index of temp
        // 4 at 0th index and 6 at 1st index so storing value at 1st index of temp as 10
        temp[i] = Math.max(temp[i], temp[j] + arr[i]);
      }
    }
}
  // temp = [4, 10, 1, 4, 18, 8, 14]

  return Math.max(...temp);
}

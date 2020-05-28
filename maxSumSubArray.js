// Maximum sum subarray
// Longest Sum Contiguous Subarray
// Kadane's algorithm

// Input: [-2 ,1 ,- 3,4 ,-1,2,1,-5,4];
// Output: 6

var maxSumSubarray = arr => {
    let max = arr[0];
    let localMax = 0;

    // to find subarray indices
    let start = 0, end = 0, subArray_start = 0;

    for(let i = 0; i < arr.length; i++) {
        localMax += arr[i];

        if(max < localMax) {
            max = localMax;
            start = subArray_start;
            end = i;
        }

        if(localMax < 0) {
            localMax = 0;
            subArray_start = i + 1;
        }
    }

    return max;
}

// OR

function maxSum(nums) {
    var currentSum = 0;
    var max = 0;

    for(var i = 0; i < nums.length; i++) {
        currentSum = Math.max(0, currentSum);
        currentSum += nums[i];
        max = Math.max(currentSum, max);
    }
    return max;
}

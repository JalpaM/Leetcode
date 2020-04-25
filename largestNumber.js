// 179. Largest Number
/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"
*/
var largestNumber = function(nums) {
    let res = '';
    let strNums = [];

    for(let i = 0; i < nums.length; i++) {
        strNums.push(nums[i].toString());
    }

    for(let i = 0; i < strNums.length - 1; i++) {
        for(let j = i + 1; j < strNums.length; j++) {
            if(strNums[i] < strNums[j]) {
                [strNums[i], strNums[j]] = [strNums[j], strNums[i]];
            }
        }
    }

    res = strNums.join('');
    return res;
};

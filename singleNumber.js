/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
*/

// Time complexity: O(n)
var singleNumber = function(nums) {
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        if(res.includes(nums[i])) {
            res.splice(res.indexOf(nums[i]), 1)
        } else {
            res.push(nums[i]);
        }
    }
    return res;
};

// OR

// Time complexity: O(m + n)
function singleNumber(arr) {
  let fre = new Map();
  let unique = [];

  for(let i = 0; i < arr.length; i++) {
    if(fre.get(arr[i])) {
      fre.set(arr[i], -1);
    } else {
      fre.set(arr[i], 1);
    }
  }

  fre.forEach((val, key) => {
    if(val === 1) {
      unique.push(key);
    }
  });

  return unique;
}

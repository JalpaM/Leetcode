// 46. Permutations
/*
Given a collection of distinct integers, return all possible permutations.
Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(nums) {
    const res = [];
    dfs(nums, res, 0);
    return res;
};

function dfs(nums, res, index) {
    if (index === nums.length - 1) {
        return res.push(nums.slice(0));
    }
    for (let i = index; i < nums.length; i++) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        dfs(nums, res, index + 1);
        [nums[i], nums[index]] = [nums[index], nums[i]];
    }
}

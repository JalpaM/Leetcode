// 78. Subsets
/*
Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

var subsets = nums => {
  let res = [[]];

  for(let i = 0; i < nums.length; i++) {
    res.forEach(item => res.push([...item, nums[i]])); // spreading all items and also adding current number
  }

  return res;
}

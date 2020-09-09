// 40. Combination Sum II
/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
Each number in candidates may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/
//Tips: go with dfs(recusrsion) for combinations or permutations
// Time complexity : O(n^2)
// Space complexity : O(n^2)
var combinationSum2 = (candidates, target) => {
  let res = [];
  candidates.sort((a, b) => a - b); // arranging in ascending order

  dfs(res, [], 0, candidates, target);

  return res;
};

var dfs = (res, current, index, candidates, target) => {
  var temp = null;

  if (target < 0) return;
  if (target === 0) return res.push(current); // found combination

  for (let i = index; i < candidates.length; i++) {
    if (candidates[i] > target) break; // candidate can't be part of combination as it's bigger than target
    if (i > index && candidates[i] === candidates[i - 1]) continue; // ignore duplicates

    temp = Array.from(current); // creating array
    temp.push(candidates[i]);
    dfs(res, temp, i + 1, candidates, target - candidates[i]);
  }
};

// 70. Climbing Stairs
/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

var climbStairs = function (n) {
  // for 3 or less stairs getting same amount of ways
  if (n <= 3) return n;

  let ways = [0, 1, 2, 3];

  // more than 3 stairs, need to count addition of less than 1 and less than 2 ways value
  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }

  return ways[n];
};

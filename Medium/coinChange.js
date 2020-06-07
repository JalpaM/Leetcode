// 322. Coin Change
/*
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1
*/
// Time Complexity: O(n^2)
var coinChange = function(coins, amount) {
    // Always take array length + 1 and fill with 0 for dynamic programming question
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // i is the number of coins needed to make an amount
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {

          // check for if coin is bigger than needed i
          if (i - coin >= 0) {
              // fewest number of coins to make i
              // dp[i - coin] must be calcuated before
            dp[i] = Math.min(dp[i], dp[i - coin] + 1); // added 1 as that's the current and [i- coin] -> after taking coin what is the amount i become
          }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

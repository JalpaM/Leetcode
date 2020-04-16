function maxProfit(prices) {
  if(prices.length === 0 || prices === null) return 0;

  let profit = 0;

  // taking prices.length - 1 because checking prices[i+1]
  for(let i = 0; i < prices.length - 1; i++) {
    if(prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]
    }
  }

  // return profit
  return profit;
}

console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([7,1,5,3,6,4]))  // 7

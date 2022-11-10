// Desc.: You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// Find and return the maximum profit you can achieve.

// Expl.: Iterating through array, looking for next bigger number than before. If this condition is found, adding it to max profit.

const maxProfit = (prices: number[]): number => {
  let max = 0
for (let i = 0; i < prices.length -1; i++) {
   if (prices[i] < prices[i+1]) {
       max += prices[i+1] - prices[i]
   }
}
   return max
};

console.log(maxProfit([1,5,3,2,6,2,8]))
console.log(maxProfit([1,3,4,6,8]))
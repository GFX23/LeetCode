// Desc.: You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// Find and return the maximum profit you can achieve.

// Expl.: Iterating through array, looking for next bigger number than before. If this condition is found, adding it to max profit.

function singleNumber(nums: number[]): number {
  let num = 0
  for (let i = 0; i < nums.length; i++) {
      num ^= nums[i]
  }
  return num
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))
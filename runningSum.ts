// Desc.:Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Expl.: Iterating through array and setting total to total + num, while setting current index with total

const runningSum = (nums: number[]): number[] => {
  let total = 0
  return nums.map(num => {
      total += num
      return total
  }
      )
};


console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))
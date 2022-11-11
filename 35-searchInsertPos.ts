// Desc.: Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// Expl.: Iterating through sorted array, while number is equal or higher then target, return index, else return length of array (so number will be pushed to the end)

const searchInsert = (nums: number[], target: number): number => {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
          return i
      } 
  }
  return nums.length
};


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))

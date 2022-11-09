// Desc.: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Expl.: Iterating through sorted array, while idx === idx+1, returning true, else false

const containsDuplicate = (nums: number[]): boolean => {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
          return true
      }
  }
  return false
};


console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
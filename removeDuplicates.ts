// Description: Remove duplicates from array

// Expl. Iterating through whole array looking for same number on idx+1 position. While found, removing with .splice and decreased counter by 1

const removeDuplicates = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
          nums.splice(i,1)
          i--
      }
  }
  console.log(nums)
     return nums.length
 };

 removeDuplicates([0,0,1,1,1,2,2,3,3,4])
 removeDuplicates([1,1,2])
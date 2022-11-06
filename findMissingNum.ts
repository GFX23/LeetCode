// Desc.: Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Expl.: Iterating through numbers from 1 to nums.length, trying to find them in nums array, if not found, adding this num to array, after that, returning array.

const findDisappearedNumbers = (nums: number[]): number[] => {
  let array: number[] = []
  for (let i = 1; i <= nums.length; i++) {
      let number = nums.find(num => num === i)
      if (!number) {
          array.push(i)
      }
  }
  return array
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,4,5,6,3,2,1,7,8,9]))
console.log(findDisappearedNumbers([3,4,5,6,7]))
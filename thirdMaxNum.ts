// Desc.: Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Expl.: Seting while loop, which looking for max num in array, until numbers array is filled or nums.length is 0

const thirdMax = (nums: number[]): number => {
  let numbers: number[] = [0]
  while (numbers.length <= 3 && nums.length !== 0) {
      let number: number = Math.max(...nums)
      numbers.push(number)
      nums = nums.filter(num => num !== number)
  }
  if (numbers.length < 4) {
      return numbers[1]
  } else {
      return numbers[numbers.length-1]
  }
};

console.log(thirdMax([3,2,1]))
console.log(thirdMax([1,2]))
console.log(thirdMax([1,1,2]))
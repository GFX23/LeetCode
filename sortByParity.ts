// Desc.: Sort array by parity - even numbers to the front, followed by odd numbers.

// Expl.: Iterating through array, checking for number parity, if even, unshifting to the array, odd numbers pushing to the array.

const sortArrayByParity = (nums: number[]): number[] => {
  let array: number[] = []
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1) {
          array.push(nums[i])
      } else {
          array.unshift(nums[i])
      }
  }
  return array
};

console.log(sortArrayByParity([3,1,2,4]))
// Desc.: Given an integer x, return true if x is a palindrome, and false otherwise.

// Expl.: Convert to string, split, reverse, join => return

interface INumObject {
  [index: number]: number
}

const majorityElement = (nums: number[]): number => {
  let map: INumObject = {}
  let max = 0
  let maj = 0
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] == undefined) {
          map[nums[i]] = 1
      } else {
          map[nums[i]] += 1
      }
      if (map[nums[i]] > max) {
          max = map[nums[i]]
          maj = nums[i]
      }
  }
  return maj
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([4,5,6,6,5,4,6]))
console.log(majorityElement([8,7,9,5,4,5,5,5,4]))
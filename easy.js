// Easy problems solutions

// Select numbers from array which will give target number in sum
// Desc.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if ((nums[i] + nums[j]) === target) return [i, j]
      }

  }
};

// Is number palindrome?
// Desc. Convert to string, split, reverse, join => return
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  const reversed = x.toString().split("").reverse().join("")
  return x === Number(reversed)
};

// Roman to integer
// Desc. Convert letters to numbers and then it will map through numbers and when number is lower than number after that, then it subtract, otherwise it will add to total
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let total = 0
  const letters = s.split("").map(letter => {
  if (letter === "I") {
      return 1
  } else if (letter === "V") {
      return 5
  } else if (letter === "X") {
      return 10
  } else if (letter === "L") {
      return 50
  } else if (letter === "C") {
      return 100
  } else if (letter === "D") {
      return 500
  } else if (letter === "M") {
      return 1000
  }})
  letters.map((number, idx) => {
      if (letters[idx] < letters[idx+1]) {
          total -= number
      } else {
          total += number
      }
  })
  return total
};

// Longest common prefix
// Desc. Take first item in array, and for every letter in this word, it will check every position
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  
  let prefix = ""
  let count = 0

  strs[0].split("").forEach(letter => {
  if (strs.every(word => word[count] === strs[0][count])) {
      prefix += strs[0][count]
      count += 1
  } else {
      return
  }
})

      return prefix
  
};
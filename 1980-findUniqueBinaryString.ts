// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------- 1980 - FIND UNIQUE BINARY STRING ------------- //

/* Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

Example 1:

Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
Example 3:

Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct. */

// ------------------------ SOLUTION -------------------------- //

// Convert binary strings to integers, sort them, and then find the missing number.
// Check edge case zero, and then iterate through the sorted array to find the missing number.
// Time complexity: O(n)
// Space complexity: O(n)

const findDifferentBinaryString = (nums: string[]): string => {
  let length = nums[0].length;
  let ints = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    ints[i] = parseInt(nums[i], 2);
  }
  ints.sort((a, b) => a - b);
  if (ints[0] !== 0) {
    let zero = (0).toString(2);
    while (zero.length < length) {
      zero = "0" + zero;
    }
    return zero;
  }
  for (let i = 0; i < nums.length; i++) {
    if (ints[i] + 1 !== ints[i + 1]) {
      let num = (ints[i] + 1).toString(2);
      while (num.length < length) {
        num = "0" + num;
      }
      return num;
    }
  }

  return "";
};

// --------------------------- LOGS --------------------------- //

console.log(findDifferentBinaryString(["01", "10"]));
console.log(findDifferentBinaryString(["00", "01"]));
console.log(findDifferentBinaryString(["111", "011", "001"]));

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1980-findUniqueBinaryString.ts

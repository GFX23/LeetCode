/* You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9" */

const summaryRanges = (nums: number[]): string[] => {

  // initialize final result variable
  let finalResult: string[] = []

  // initialize starting values
  let start = nums[0]
  let end = nums[0]

  // starting forloop, iterating through nums array
  for (let i = 0; i < nums.length; i++) {

    // checking for next number if is in line, if yes, setting end variable as this number
    if (nums[i+1] === nums[i]+1) {
      end = nums[i+1]

      // else, if theres start is same as end, pushing just number, if not, pushing whole row
    } else {
      if (start === end) {
        finalResult.push(`${start}`)
        start = end = nums[i+1]
      } else {
        finalResult.push(`${start}->${end}`)
        start = end = nums[i+1]
      }

    }
  }
  return finalResult
};

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
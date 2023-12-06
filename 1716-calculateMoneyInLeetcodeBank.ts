// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------- 1716 - CALCULATE MONEY IN LEETCODE BANK ----------- //

/* Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 

Example 1:

Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
Example 2:

Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
Example 3:

Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96. */

// ------------------------ SOLUTION -------------------------- //

// While n > 0, add 1 to week and iterate through 7 days, adding week + i to ans.
// Subtract 7 from n and repeat.
// Return ans.

// Time complexity: O()
// Space complexity: O(1)

const totalMoney = (n: number): number => {
  let ans = 0
  let week = 1
  while (n > 0) {
      for (let i = 0; i < Math.min(n, 7); i++) {
          ans += week + i
      }
      n -= 7
      week++
  }
  return ans
};



// --------------------------- LOGS --------------------------- //

console.log(totalMoney(4))
console.log(totalMoney(10))
console.log(totalMoney(20))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1716-calculateMoneyInLeetcodeBank.ts
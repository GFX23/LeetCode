// Desc.: Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function isHappy(n: number): boolean {
  let count = 0
  while (n > 1) {
      let number: string[] = n.toString().split("")
      for (let i = 0; i < number.length ; i++) {
          count += parseInt(number[i])**2
      }
      n = count
      if (count === 1) {
      return true
  }
  count = 0
  }
  return false
};
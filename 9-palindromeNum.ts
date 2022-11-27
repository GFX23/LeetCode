// Desc.: Given an integer x, return true if x is a palindrome, and false otherwise.

// Expl.: Convert to string, split, reverse, join => return

const isPalindromeNum = (x: number): boolean => {
  const reversed: string = x.toString().split("").reverse().join("");
  return x === parseInt(reversed);
};

console.log(isPalindromeNum(787));
console.log(isPalindromeNum(111111));
console.log(isPalindromeNum(456));
console.log(isPalindromeNum(879545));

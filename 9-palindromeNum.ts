// Desc.: Given an integer x, return true if x is a palindrome, and false otherwise.

// Expl.: Convert to string, split, reverse, join => return

const isPalindrome = (x: number): boolean => {
  const reversed: string = x.toString().split("").reverse().join("")
  return x === parseInt(reversed)
}

console.log(isPalindrome(787))
console.log(isPalindrome(111111))
console.log(isPalindrome(456))
console.log(isPalindrome(879545))
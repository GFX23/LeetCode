// Desc.: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Expl.: Creating cleaned string with regex coverted to lowerCase, then comparing cleaned string with reversed string (which is done using array.split.reverse.join method)


const isPalindrome = (s: string): boolean => {
  const cleaned: string = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
  return cleaned === cleaned.split("").reverse().join("")
};
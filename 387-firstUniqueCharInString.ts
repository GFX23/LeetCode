/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1 */ 

const firstUniqChar = (s: string): number => {

  // setting hashMap
  const charCount = new Map()

  // filling hashMap with count of each letter
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) +1)
  }

  // checking if letter is just one-time in map, if yes returning current index
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) == 1) {
      return i
    }
  } 
  // otherwise returning -1
  return -1
}

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))

// ts-node 387-firstUniqueCharInString.ts
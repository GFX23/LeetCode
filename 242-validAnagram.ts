/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */

const isAnagram = (s:string, t:string): boolean => {
  if (s.length !== t.length) {
    return false
  } else {
    const reversedStringT: string[] = t.split("").sort()
    const reversedStringS: string[] = s.split("").sort()
    /*for (let i =0; i < s.length; i++) {
      if (reversedStringS[i] !== reversedStringT[i]) {
        return false
      }
    }
  }*/
  if (reversedStringS !== reversedStringT) {
    return false
  }
  return true
}
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
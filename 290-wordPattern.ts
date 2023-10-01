/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false */

interface DictProps {
  [key: string]: string,
}

const wordPattern = (pattern: string, s: string): boolean => {
  const sArray: string[] = s.split(" ")

  // checking first if theres similar word count to pattern.length
  if (sArray.length !== pattern.length) {
    console.log("returning")
    return false
  }
  // initiliazing dict variable
  let dict: DictProps = {}

  // iterate through splitted array
  for (let i in sArray) {
    console.log("assigning")

    // checking if key already exist and if yes, if it`s assigned to proper value
    if (dict[pattern[i]] && dict[pattern[i]] !== sArray[i]) {
      console.log("returning on exist check")
      return false
    }

    // assigning if not
    dict[pattern[i]] = sArray[i]
    console.log(dict)

    // checking for duplicates, which will mean, string doesnt follow pattern
    if (Object.values(dict).length !== [...new Set(Object.values(dict))].length ){
      console.log("value is already assigned to another key")
      return false
    }
  }

  // all done
  console.log("assigned whole array")
  return true
}

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))

// run ts-node 290-wordPattern.ts
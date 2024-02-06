// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array of strings and sort each string.
// Create a map with sorted strings as keys and arrays of strings as values.
// Return the values of the map as an array.

// Time complexity: O(n log n)
// Space complexity: O(n)

const sortString = (str: string) =>{
  return str.split('').sort().join('')
}

const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>()

  for(let str of strs){
      const sortedStr = sortString(str)

      const foundKey = map.get(sortedStr)
      
      if(foundKey){
          foundKey.push(str)
          map.set(sortedStr, foundKey)
          continue
      }

      map.set(sortedStr, [str])
  }

  return Array.from(map.values())
};


// --------------------------- LOGS --------------------------- //

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 
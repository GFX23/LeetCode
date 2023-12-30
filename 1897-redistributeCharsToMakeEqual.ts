// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// - 1897 - Redistribute Characters to Make all strings Equal - //

/* You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

 

Example 1:

Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.
Example 2:

Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters. */

// ------------------------ SOLUTION -------------------------- //

// create a map of all characters and their counts.
// if every count is divisible by the number of words, return true.
// else return false.

// Time complexity: 
// Space complexity: 

const makeEqual = (words: string[]): boolean => {
  const map = new Map<string, number>();
  words.forEach(x => {
      for (const c of x) {
          map.set(c, (map.get(c) || 0) + 1);
      }
  });
  return Array.from(map.values()).every(v => v % words.length === 0);
};



// --------------------------- LOGS --------------------------- //

console.log(makeEqual(["abc","aabc","bc"]))
console.log(makeEqual(["ab","a"]))
console.log(makeEqual(["a","b"]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1897-redistributeCharsToMakeEqual.ts
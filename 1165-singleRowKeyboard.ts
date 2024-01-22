// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 1165. Single-Row Keyboard ----------------- //

/* There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

 

Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
Example 2:

Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73 */

// ------------------------ SOLUTION -------------------------- //

// Setting up map of keyboard
// Setting up result variable
// Setting up last index variable
// Setting up current index variable
// Iterate through word
// Set current index to map.get(word[i])
// Set num to Math.abs(lastIndex - currentIndex)
// Set lastIndex to currentIndex
// Add num to result
// Return result

// Time complexity: O(n)
// Space complexity: O(n)

const calculateTime = (keyboard: string, word: string): number => {
  const map = new Map()
  for (let i = 0; i < keyboard.length; i++) {
      map.set(keyboard[i], i)
  }

  let result = 0
  let lastIndex = 0
  let currentIndex = 0

  for (let i = 0; i < word.length; i++) {
      currentIndex = map.get(word[i])
      let num = Math.abs(lastIndex - currentIndex)
      lastIndex = currentIndex
      result += num
  }

  return result
};


// --------------------------- LOGS --------------------------- //

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"))
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"))  
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "pqrstuvwxyzabcdefghijklmno"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1165-singleRowKeyboard.ts
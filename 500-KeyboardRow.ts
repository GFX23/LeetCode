// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------------- 500 - KEYBOARD ROW -------------------- //

/* Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"] */

// ------------------------ SOLUTION -------------------------- //

// Set up a Set for each row of the keyboard.
// Iterate through the words array.
// For each word, iterate through the characters.
// Check if the character is in the first row.
// If it is, set a flag to 1.
// Check if the character is in the second row.
// If it is, set a flag to 2.
// Check if the character is in the third row.
// If it is, set a flag to 3.
// If the flags are all the same, push the word to the result array.
// Return the result array.
// Time complexity: O(n * m) where n is the number of words and m is the length of the longest word.
// Space complexity: O(1)

const findWords = (words: string[]): string[] => {
  const keyboardRows = [
    new Set('qwertyuiop'),
    new Set('asdfghjkl'),
    new Set('zxcvbnm')
  ];

  console.log(keyboardRows);
  return words.filter(word => {
    let flag = 0;
    for (const char of word) {
      if (keyboardRows[0].has(char.toLowerCase())) {
        flag |= 1;
      } else if (keyboardRows[1].has(char.toLowerCase())) {
        flag |= 2;
      } else if (keyboardRows[2].has(char.toLowerCase())) {
        flag |= 4;
      }
    }
    return flag === 1 || flag === 2 || flag === 4;
  });
};



// --------------------------- LOGS --------------------------- //

console.log(findWords(["Hello","Alaska","Dad","Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf","sfd"]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 500-KeyboardRow.ts
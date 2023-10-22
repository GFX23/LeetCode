// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 557 - Reverse Words in a String II ------------ //

/* Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD" */

// ------------------------ SOLUTION -------------------------- //

// Split the string into an array of words, then split each word into an array of characters, 
// reverse the array of characters, then join the array of characters back into a string, 
// then join the array of words back into a string.
// Time complexity: O(n)
// Space complexity: O(n)

const reverseWords = (s: string): string => {
  return s
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
};

// --------------------------- LOGS --------------------------- //

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
console.log(reverseWords("a b c d e f g"));

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 557-reverseWordsInStringII.ts

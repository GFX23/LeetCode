// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 387 - First Unique Character in a String --------- //

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

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string and store the index of each character in a hash table.
// Iterate through the hash table and return the index of the first character that has only one index in the hash table.
// If no such character exists, return -1.

// Time complexity: O(n) - we iterate through the string once and through the hash table once.
// Space complexity: O(n) - we store the index of each character in the hash table.

const firstUniqChar = (s: string): number => {
    const hash: Record<string, number[]> = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = [];
        }
        hash[s[i]].push(i);
    }
    for (const key in hash) {
        if (hash[key].length === 1) {
            return hash[key][0];
        }
    }
    return -1;
};


// --------------------------- LOGS --------------------------- //

console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2 
console.log(firstUniqChar("aabb")) // -1

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 387-firstUniqueCharacterInAString.ts
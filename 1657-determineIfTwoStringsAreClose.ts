// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 1657. Determine if Two Strings Are Close --------- //

/* Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc" */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const closeStrings = (word1: string, word2: string): boolean => {
    let w1l = word1.length
    let w2l = word2.length
    if (w1l !== w2l) {
        return false
    }

    let fCharSet = new Set(word1)
    let sCharSet = new Set(word2)
    for (let char of fCharSet) {
        if (!sCharSet.has(char)) return false
    }


    
    let fMap = new Map()
    let sMap = new Map()

    for (let i = 0; i < w1l; i++) {
        fMap.set(word1[i], (fMap.get(word1[i]) || 0) +1)
        sMap.set(word2[i], (sMap.get(word2[i]) || 0) +1)
    }

    let fMapVal = [...fMap.values()].sort((a,b) => a - b).join("")
    let sMapVal = [...sMap.values()].sort((a,b) => a - b).join("")

    return parseInt(fMapVal) === parseInt(sMapVal)
};


// --------------------------- LOGS --------------------------- //

console.log()
console.log()
console.log()

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 
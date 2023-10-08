// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 409 - LONGEST PALINDROME ------------------ //

/* Given a string s which consists of lowercase or uppercase letters, return the length
 of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1. */

// ------------------------ SOLUTION -------------------------- //

// String to be palindrome need to have even count of chars in it +1 in middle for odd count.
// We will create hashmap from string.
// Then iterating through hashmap we will count chars, even will be as it is, odd will be -1, 
// also we will check for odd number var, which will be set to 1 if there will be any.
// Time complexity: O(n)
// Space complexity: O(n)

const longestPalindrome = (s: string): number => {

  // Setting two variables - empty HashMap, result and odd number existence.
  const hashMap = new Map()
  let result = 0
  let oddNum = 0

  // Iterating through string, storing every char into Hashmap.
  for (const char of s) {

    // Checking if key exist, if yes, adding to it, else setting new key wth value 1.
    if (hashMap.get(char)) {
      hashMap.set(char, hashMap.get(char)+1)
    } else {
      hashMap.set(char, 1)
    }
    console.log(hashMap)
  }

  // Iterating through map, adding values to result, subtract -1 on odd number, setting oddNum to +1 if theres any.
  for (let [key, value] of hashMap) {
    if (value % 2 == 0) {
      result += value
    } else {
      result += value -1
      oddNum = 1
    } 
    console.log(key, value)
  }

  // returning result + existence of odd num
  return result + oddNum
 }



// --------------------------- LOGS --------------------------- //

console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("aadsdff"))
console.log(longestPalindrome("bananas")) 
console.log(longestPalindrome("ccc")) 
console.log(longestPalindrome("bb")) 
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")) // 983

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 409-longestPalindrome.ts
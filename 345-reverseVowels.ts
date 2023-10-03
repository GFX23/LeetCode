/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede" */

const reverseVowels = (s: string): string => {

  // since we cannot assign directly on string, we have to create var for array
  let sSplit = s.split("");

  //setting two pointers
  let left: number = 0;
  let right: number = sSplit.length - 1;

  //setting vowels including UpperCase
  const vowels: string[] = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  // twopointer approach
  while (left < right) {
    console.log("first", sSplit[left], sSplit[right]);

    // condition for switching
    if (vowels.includes(sSplit[left]) && vowels.includes(sSplit[right])) {
      [sSplit[left], sSplit[right]] = [sSplit[right], sSplit[left]];
      left+=1
      right-=1
      console.log("changed");

      // condition for moving
    } else {
      if (!vowels.includes(sSplit[left])) {
        left++;
        console.log("moved left", sSplit[left]);
      }
      if (!vowels.includes(sSplit[right])) {
        right--;
        console.log("moved right", sSplit[right]);
      }
    }
  }
  // joining string and returning
  return sSplit.join("");
};

//sample test cases
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));

// Desc.: Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Expl.: Iterating through trimmed string from the end, looking for " ", after that returning length of the last word, if " " not found returning length of the only word.

const lengthOfLastWord = (s: string): number => {
  let string = s.trim()
  for (let i = string.length-1; i >= 0 ; i-- ) {
      if (string[i] === " ") {
          return string.length - i -1
      } 
  }
  return string.length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("a"))
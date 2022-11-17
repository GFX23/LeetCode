// Desc.: Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

// Expl.: Starting with first item in array, adding letters to prefix and looking in every index of array, if prefix exist, if not returning last prefix.

const longestCommonPrefix = (strs: string[]): string =>{
  if (!strs.length) return ''
  
  let prefix = ""
  let count = 0

  strs[0].split("").forEach(letter => {
  if (strs.every(word => word[count] === strs[0][count])) {
      prefix += strs[0][count]
      count += 1
  } else {
      return
  }
})

      return prefix
  
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
// Desc.: Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can by used once.

// Expl.: Creating two arrays from strings, then iterating through Note, while looking for index of current letter in Magazine, if found, splicing it from array, if not, returning false.
// If every letter was succesfully removed from array, then requirement was met and func will return true.

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const mag = magazine.split("")

  for (let char of ransomNote.split("")) {
    let idxOfElement = mag.findIndex(element => element === char)
    if (idxOfElement === -1) {
      console.log(false)
      return false
    } else {
      mag.splice(idxOfElement, 1)
    }
  }
  console.log(true)
  return true
};

canConstruct("a", "b")
canConstruct("aa", "ab")
canConstruct("aa", "aab")
canConstruct("aab", "baa")
canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
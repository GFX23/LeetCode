// Desc.: Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Expl.: Setting for loop. iterating through every char in string.
//        Multiplying by 26, which is number of chars in alphabet and adding value of char

function titleToNumber(columnTitle: string): number {
  let finalNum = 0
  for (let char of columnTitle) {
      finalNum *= 26
      finalNum += (char.charCodeAt(0) - 64) 
  }
  return finalNum
};

console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ASD"))
console.log(titleToNumber("YASS"))
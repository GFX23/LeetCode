// Desc.: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 


// Expl.: Setting while loop, which will divide number by 26 when bigger than 26.
//        Using % operator setting rest number from 26 division, (decreasing num by 1 for zero case and incresing by one at char pos) will create final string.

function convertToTitle(columnNumber: number): string {
  let finalString: string = ""
  while (columnNumber > 26) {
      columnNumber--
      finalString += String.fromCharCode(columnNumber%26+65)
      columnNumber = Math.floor(columnNumber / 26)
  }
  finalString += String.fromCharCode(columnNumber+64)
return finalString.split("").reverse().join("")
};

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))
console.log(convertToTitle(15237))
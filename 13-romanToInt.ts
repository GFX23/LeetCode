// Desc.: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

// Expl.: Mapping through array, converting each roman to integer, then if lesser num is before higher num, then reducing array,
//  while next num in array is lesser, subtracting it from sum, otherwise adding it to total.

const romanToInt = (s: string): number => {
  let total = 0
  const letters: number[] = s.split("").map(letter => {
  if (letter === "I") {
      return 1
  } else if (letter === "V") {
      return 5
  } else if (letter === "X") {
      return 10
  } else if (letter === "L") {
      return 50
  } else if (letter === "C") {
      return 100
  } else if (letter === "D") {
      return 500
  } else if (letter === "M") {
      return 1000
  } else {
    return 0
  }
})
  letters.map((num: number, idx: number) => {
      if (letters[idx] < letters[idx+1]) {
          total -= num
      } else {
          total += num
      }
  })
  return total
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

// run ts-node 13-romanToInt.ts
// Desc.: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Expl.: Converting array to string, incrementing with +1, then splitting it into array.

const plusOne = (digits: number[]): number[] => {
  return Array.from(String(BigInt(digits.join("")) + BigInt(1)), x => parseInt(x))
};

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([1,4,5,6,1,2,3,7,8,5,4,2,1,2,5,4,4]))
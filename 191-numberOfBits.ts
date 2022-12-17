// Desc.: Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Expl.: toString method makes binary from decimal, padStart create 32bit string filled with zeros, split, reverse, join will make the rest.


const hammingWeight = (n: number): number => {
  return n.toString(2).padStart(32, "0").replace(/0/gi, "").length
};

console.log(hammingWeight(12548))
console.log(hammingWeight(444412548))
console.log(hammingWeight(1255465448))
console.log(hammingWeight(111412548))
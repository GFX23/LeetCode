// Desc.: Reverse bits of a given 32 bits unsigned integer.

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

// Expl.: toString method makes binary from decimal, padStart create 32bit string filled with zeros, split, reverse, join will make the rest.


const reverseBits = (n: number): number => {
	return parseInt(n.toString(2).padStart(32, "0").split("").reverse().join(""), 2)
};

console.log(reverseBits(12548))
console.log(reverseBits(444412548))
console.log(reverseBits(1255465448))
console.log(reverseBits(111412548))
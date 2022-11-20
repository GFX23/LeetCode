// Desc.: Given two binary strings a and b, return their sum as a binary string.

// Expl.: Converting binary string to BigInt (added "0b"), sum them together, then converting to binary nad returning.

const addBinary = (a: string, b: string): string => {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
};


console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
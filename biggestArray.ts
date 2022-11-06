// Desc.: You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.

// Expl.:

const biggestArray = (accounts: number[][]): number => {
  return Math.max(...accounts.map(account => account.reduce((current, total) => total + current)))
};


console.log(biggestArray([[1,2,3],[3,2,1]]))
console.log(biggestArray([[1,5],[7,3],[3,5]]))
console.log(biggestArray([[2,8,7],[7,1,3],[1,9,5]]))
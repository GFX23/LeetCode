// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------- 2634 - FILTER ELEMENTS FROM ARRAY ------------ //
// ------------------ 30 DAYS OF JAVASCRIPT ------------------- //

/* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out */

// ------------------------ SOLUTION -------------------------- //

// Iterating over array, applying function to each element and returning new array.
// This should demonstrate understanding of higher order functions and callbacks.
// Setting size of new array to arr.length, then removing empty elements.
// Time complexity: 
// Space complexity: 

type Fn = (n: number, i: number) => any

const filter = (arr: number[], fn: Fn): number[] => {
	let size = 0
    let newArr = new Array<number>(arr.length)
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr[size] = arr[i]
            size++
        }
    }
    while (size < newArr.length) {
        newArr.pop()
    }
    return newArr
};



// --------------------------- LOGS --------------------------- //

console.log(filter([0,10,20,30], (n) => n > 10))
console.log(filter([1,2,3], (n, i) => i === 0))
console.log(filter([-2,-1,0,1,2], (n) => n + 1))
console.log(filter([-2,-1,0,1,2], (n) => n + 1 > 0))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2634-filterElementsFromArray.ts
// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------- 599 - Minimum Index Sum ------------------- //

/* Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.



Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
Example 3:

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy". */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: O(n)
// Space complexity: O(m)

function findRestaurant(list1: string[], list2: string[]): string[] {
  // setting empty map and min value to infinity
  const map = new Map
  let minValue = Infinity

  // iterating through list1 looking for matches in list2
  for (let i = 0; i < list1.length; i++) {
    let sum = i + list2.indexOf(list1[i])

    // if match is found and sum is less than or equal to minValue
    if (list2.includes(list1[i]) && sum <= minValue) {

      // if sum is less than minValue, clear map and set new key/value pair
      if (sum < minValue) {
        map.clear()
        map.set(list1[i], i + list2.indexOf(list1[i]))
        minValue = Math.min(minValue, i + list2.indexOf(list1[i]))

      // if sum is equal to minValue, set new key/value pair
      } else {
        map.set(list1[i], i + list2.indexOf(list1[i]))
        minValue = Math.min(minValue, i + list2.indexOf(list1[i]))
      }
    }
  }
  // return array of keys
  return [...map.keys()]
};

// --------------------------- LOGS --------------------------- //

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]))
console.log(findRestaurant(["Shogun","Piatti","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))

// ----------------------- CLI COMMAND ------------------------ //

//ts-node 599-minimumIndexSum.ts
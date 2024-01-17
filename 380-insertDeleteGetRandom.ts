// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 380. Insert Delete GetRandom O(1) ------------- //

/* Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

 

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2. */

// ------------------------ SOLUTION -------------------------- //

// Create class RandomizedSet
// Create private set and array
// Create constructor with set and array
// Create insert method
// If set has val return false
// Add val to set and array
// Return true
// Create remove method
// If set doesn't have val return false
// Delete val from set
// Find index of val in array
// Set val at index to last element in array
// Pop last element from array
// Return true
// Create getRandom method
// Create randomIndex variable
// Set randomIndex to random number between 0 and array length
// Return array at randomIndex

// Time complexity: 
// Space complexity: 

class RandomizedSet {
  private set: Set<number>;
  private array: number[];

  constructor() {
      this.set = new Set<number>();
      this.array = [];
  }

  insert(val: number): boolean {
      if (this.set.has(val)) {
          return false;
      }
      this.set.add(val);
      this.array.push(val);
      return true;
  }

  remove(val: number): boolean {
      if (!this.set.has(val)) {
          return false;
      }
      this.set.delete(val);
      const index = this.array.indexOf(val);
      this.array[index] = this.array[this.array.length - 1];
      this.array.pop();
      return true;
  }

  getRandom(): number {
      const randomIndex = Math.floor(Math.random() * this.array.length);
      return this.array[randomIndex];
  }
}

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 380-insertDeleteGetRandom.ts
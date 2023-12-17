// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 2353 - DESIGN A FOOD RATING SYSTEM------------- //

/* Design a food rating system that can do the following:

Modify the rating of a food item listed in the system.
Return the highest-rated food item for a type of cuisine in the system.
Implement the FoodRatings class:

FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system. The food items are described by foods, cuisines and ratings, all of which have a length of n.
foods[i] is the name of the ith food,
cuisines[i] is the type of cuisine of the ith food, and
ratings[i] is the initial rating of the ith food.
void changeRating(String food, int newRating) Changes the rating of the food item with the name food.
String highestRated(String cuisine) Returns the name of the food item that has the highest rating for the given type of cuisine. If there is a tie, return the item with the lexicographically smaller name.
Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order. */

// ------------------------ SOLUTION -------------------------- //

// Time complexity:
// Space complexity:

class FoodRatings {
  public foods
  public cuisines
  public ratings
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
      this.foods = foods
      this.cuisines = cuisines
      this.ratings = ratings
  }

  changeRating(food: string, newRating: number): void {
      const index = this.foods.indexOf(food)
      this.ratings[index] = newRating
  }

  highestRated(cuisine: string): string {
      let high = 0
      let highIndex = 0
      for(let i = 0 ; i < this.cuisines.length ; i++){
          if(this.cuisines[i] == cuisine){
              if(this.ratings[i] > high) {
                  high = this.ratings[i]
                  highIndex = i
              }
              else if(this.ratings[i] == high) {
                  if(this.foods[highIndex] > this.foods[i]) highIndex = i
              }
          }
      }return this.foods[highIndex]
  }
}

// --------------------------- LOGS --------------------------- //

// console.log();
// console.log();
// console.log();

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node

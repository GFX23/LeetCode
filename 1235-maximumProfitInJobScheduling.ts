// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------- 1235 - MAXIMUM PROFIT IN JOB SCHEDULING --------- //

/* We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

 

Example 1:



Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
Example 2:



Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.
Example 3:



Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the jobs array and for each job, check if there is a job that ends before the current job starts.
// If there is, add the profit of that job to the current job's profit.
// If there isn't, the current job's profit is the max profit.
// Return the max profit.

// Time complexity: O(n^2)
// Space complexity: O(n)

const jobScheduling = (startTime: number[], endTime: number[], profit: number[]): number => {
  const jobs = startTime.map((start, i) => ({ start, end: endTime[i], profit: profit[i] }));

  jobs.sort((a, b) => a.end - b.end);

  const maxProfit: number[] = [jobs[0].profit];

  for (let i = 1; i < jobs.length; i++) {
      let currentProfit = jobs[i].profit;

      for (let j = i - 1; j >= 0; j--) {
          if (jobs[j].end <= jobs[i].start) {
              currentProfit += maxProfit[j];
              break;
          }
      }

      if (currentProfit > maxProfit[i - 1]) {
          maxProfit[i] = currentProfit;
      } else {
          maxProfit[i] = maxProfit[i - 1];
      }
  }

  return maxProfit[maxProfit.length - 1];
};


// --------------------------- LOGS --------------------------- //

console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70]))
console.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60]))
console.log(jobScheduling([1,1,1], [2,3,4], [5,6,4]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1235-maximumProfitInJobScheduling.ts
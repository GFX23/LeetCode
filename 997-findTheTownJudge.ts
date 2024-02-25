// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 997 - FIND THE TOWN JUDGE ----------------- //

/* In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the trust array and count the number of incoming trusts for each person. Also, create an array of trustees and set the value to false for each person that trusts someone. Then, iterate through the incomingTrusts array and return the index of the person that has n - 1 incoming trusts and is not a trustee. If no such person is found, return -1.

// Time complexity: O(n)
// Space complexity: O(n)

const findJudge = (n: number, trust: number[][]): number => {
  const incomingTrusts = new Array(n + 1).fill(0);
  const trustees = new Array(n + 1).fill(true);
  for (const [trustor, trustee] of trust) {
      incomingTrusts[trustee]++;
      trustees[trustor] = false;
  }
  for (let i = 1; i <= n; i++) {
      if (incomingTrusts[i] === n - 1 && trustees[i]) {
          return i;
      }
  }
  return -1;
};


// --------------------------- LOGS --------------------------- //

console.log(findJudge(2, [[1,2]])) // 2
console.log(findJudge(3, [[1,3],[2,3]])) // 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])) // -1

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 997-findTheTownJudge.ts
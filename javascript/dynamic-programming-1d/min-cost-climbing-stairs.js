// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

function minCostClimbingStairs(cost) {
    // modify the cost array to contains just the min cost to reach of the top floor
    cost.push(0)
    // start from the penultimate step towards the first step
    for (let i = cost.length - 3; i >= 0; i--) {
        // compute the cost to climb one step from here
        const firstStepCost = cost[i] + cost[i + 1]
        // compute the cost to climb two step from here
        const twpStepCost = cost[i] + cost[i + 2]
        // get the minimum cost
        cost[i] = Math.min(firstStepCost, twpStepCost)
    }
    // we can climb either from the first or second step so we take the one with min cost
    return Math.min(cost[0], cost[1])
}

// testing
console.log(minCostClimbingStairs([10, 15, 20])) // expected output: 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // expected output: 6
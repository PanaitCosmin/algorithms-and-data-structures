// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
    let [oneStep, twoStep] = [1, 1]

    for (let i = 1; i < n; i++) {
        let temp = oneStep
        oneStep = oneStep + twoStep
        twoStep = temp
    }

    return oneStep
}

// testing
console.log(climbStairs(3)) // expected output: 3
console.log(climbStairs(4)) // expected output: 5
// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly the targetSum.
// If there is no combination that adds up to the targetSum, then return null.

function howSum(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

// testing
console.log(howSum(8, [2, 3, 5])) // expected output: [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // expected output: null
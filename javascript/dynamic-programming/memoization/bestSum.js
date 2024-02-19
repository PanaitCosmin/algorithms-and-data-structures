// Write a function 'bestSum(targetSum, numbers)', that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// If there is a tie for the shortest combination, you may return any one of the shortest.

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortest = null
    for (let number of numbers) {
        const remainder = targetSum - number
        const remainderCombination = bestSum(remainder, numbers, memo)
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, number]
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination
            }
        }
    }

    memo[targetSum] = shortest
    return shortest
}

// testing
console.log(bestSum(8, [2, 4, 5])) // expected output: [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // expected output: [25, 25, 25, 25]
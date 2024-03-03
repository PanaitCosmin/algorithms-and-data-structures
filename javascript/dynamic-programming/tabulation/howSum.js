// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly the targetSum.
// If there is no combination that adds up to the targetSum, then return null.

function howSum(targetSum, numbers,) {
    const table = Array(targetSum + 1).fill(null)
    // seed the trivial answer into the table
    table[0] = []
    // loop throught table
    for (let i = 0; i < targetSum; i++) {
        if (table[i] !== null) {
            // loop throught numbers 
            for (let num of numbers) {
                if ((i + num) <= targetSum) {
                    table[i + num] = [...table[i], num]
                }
            }
        }
    }

    return table[targetSum]
}

// testing
console.log(howSum(8, [2, 3, 5])) // expected output: [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // expected output: null
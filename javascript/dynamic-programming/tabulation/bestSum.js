// Write a function 'bestSum(targetSum, numbers)', that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// If there is a tie for the shortest combination, you may return any one of the shortest.

function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null)
    // seed the trivial answer into the table
    table[0] = []
    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for (let num of numbers) {
                const combination = [... table[i], num]
                // if current combination shorter than current value
                if (!table[i + num] || table[i + num]?.length > combination.length){
                    table[i + num] = combination
                }
            }
        }
    }

    return table[targetSum]
}

// testing
console.log(bestSum(8, [2, 4, 5])) // expected output: [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // expected output: [25, 25, 25, 25]
// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as argumenst.
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

function canSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false)
    // seed the trivial answer into the table
    table[0] = true
    // loop throght table
    for (let i = 0; i < targetSum; i++) {
        // find a number which can lead to the target sum
        if (table[i]) {
            // update the element at coordinates current + num
            for (let num of numbers) {
                table[i + num] = true
            }
        }
    }

    return table[targetSum]
}

// testing
console.log(canSum(7, [5, 3, 4, 7])) // expected output: true
console.log(canSum(300, [7, 14])) // expected output: false
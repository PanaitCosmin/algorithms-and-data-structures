//You are given an array containing n distinct numbers taken from the range 1 to n+1. 
//This means there is one number missing from the sequence. 
//Write a function to find and return the missing number.

// For example:

    // Input: [3, 7, 1, 2, 8, 4, 5]
    // Output: 6 (since 6 is missing from the sequence 1 to 8)

    // Input: [1, 2, 4, 6, 3, 7, 8]
    // Output: 5 (since 5 is missing from the sequence 1 to 8)


function findMissingNumber(nums) {
    const n = nums.length + 1
    const sum = (n * (n + 1)) / 2
    const realSum = nums.reduce((acc, curr) => acc + curr, 0)

    return sum - realSum
}

// testing
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]))
// expected output: 6
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]))
// expected output: 5
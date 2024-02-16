// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as argumenst.
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

function canSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false
    
    for (let num of numbers) {
        const remainder = targetSum - num
        if (canSum(remainder, numbers, memo)){
          memo[targetSum] = true
          return true  
        } 
    }
    memo[targetSum] = false
    return false
}

// testing
console.log(canSum(7, [5, 3, 4, 7])) // expected output: true
console.log(canSum(300, [7, 14])) // expected output: false
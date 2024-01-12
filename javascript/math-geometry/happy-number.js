// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

function isHappy(n) {
    // create a set to save the sum squares of the digits
    const sumSet = new Set()
    // compute the sum until number equals 1 or the sum has been seen already
    while (n !== 1 && !sumSet.has(n)) {
        // add visited number
        sumSet.add(n)
        // compute the sum
        n = sumSquareDigits(n)
    }
    
    return n === 1 
}
// sum squares of the digits
function sumSquareDigits(num) {
    // initilize sum
    let sum = 0
    // loop through digits
    while (num !== 0) {
        // add the square of the last digit
        sum += Math.pow(num % 10, 2)
        // delete the last digit
        num = Math.floor(num / 10)
    }

    return sum
}

// testing
console.log(isHappy(19))
// expected output: true
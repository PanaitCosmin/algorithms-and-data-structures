// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of a Finonacci sequence.

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

// testing
console.log(fib(6)) // output expected: 8
console.log(fib(7)) // output expected: 13
console.log(fib(50)) // output expected: 12586269025
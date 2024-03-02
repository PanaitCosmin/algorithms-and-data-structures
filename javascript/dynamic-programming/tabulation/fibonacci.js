// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of a Finonacci sequence.

function fib(n) {
    if (n === 0) return 0

    const table = Array(n + 1).fill(0)

    table[1] = 1

    for (let i = 0; i <= n; i++) {
        if (i + 1 <= n) {
            table[i + 1] += table[i];
        }
        if (i + 2 <= n) {
            table[i + 2] += table[i];
        } 
    }

    return table[n]
}

// testing
console.log(fib(6)) // output expected: 8
console.log(fib(7)) // output expected: 13
console.log(fib(50)) // output expected: 12586269025
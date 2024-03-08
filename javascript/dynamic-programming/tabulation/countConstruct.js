// Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.


function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1

    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) == word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }

    return table[target.length]
}

// testing
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
// expected output: 2
console.log(countConstruct('aaaaaaaaaaaaaaaaaX', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa'])); 
// expected output: 0

// Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

function canConstruct(target, wordBank) {
   const table = Array(target.length + 1).fill(false)
    table[0] = true

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true
                }
            }
        }
    }

    return table[target.length]
}

// testing
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// expected output: true
console.log(canConstruct("eeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "f"]))
// expected output: true
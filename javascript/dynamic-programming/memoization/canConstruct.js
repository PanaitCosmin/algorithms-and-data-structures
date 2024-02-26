// Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === "") return true

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)

            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}

// testing
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// expected output: true
console.log(canConstruct("eeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "f"]))
// expected output: true
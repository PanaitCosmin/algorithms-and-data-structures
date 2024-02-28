// Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.


function countConstruct(target, wordBank, memo = {}) {
    if(target in memo) return memo[target]
    if(target === "") return 1

    let totalCount = 0

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const count = countConstruct(suffix, wordBank, memo)
            totalCount += count
        }
    }

    memo[target] = totalCount
    return totalCount
}

// testing
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
// expected output: 2
console.log(countConstruct('aaaaaaaaaaaaaaaaaX', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa'])); 
// expected output: 0

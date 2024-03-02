// Write  a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the
// 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.

function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === "") return [[]]

    const res = []

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            res.push(...targetWays)
        }
    }

    memo[target] = res
    return res
}

// testing 
console.log(allConstruct('purple', ['pu', 'rp','ple', 'l', 'e', 'r']))
// expected output:
// [ [ 'pu', 'rp', 'l', 'e' ], [ 'pu', 'r', 'ple' ] ]
console.log(allConstruct('aaaaaaaaaaaaaay', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
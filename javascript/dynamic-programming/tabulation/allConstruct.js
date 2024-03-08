// Write  a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the
// 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.

function allConstruct(target, wordBank) {
   const table = Array(target.length + 1)
   .fill()
   .map(() => [])

   table[0] = [[]]

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map(subArr => [...subArr, word])
                table[i + word.length].push(...newCombination)
            }
        }
    }

   return table[target.length]
}

// testing 
console.log(allConstruct('purple', ['pu', 'rp','ple', 'l', 'e', 'r']))
// expected output:
// [ [ 'pu', 'rp', 'l', 'e' ], [ 'pu', 'r', 'ple' ] ]
console.log(allConstruct('aaaaaaaaaaaaaay', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
// expected output: []
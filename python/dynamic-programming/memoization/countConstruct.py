# Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.
# The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

def countConstruct(target: str, wordBank: list, memo = None) -> int:
    if memo is None:
        memo = {}

    if target in memo: return memo[target]
    if target == "": return 1

    totalCount = 0

    for word in wordBank:
        if target.startswith(word):
            suffix = target[len(word) : ]
            count = countConstruct(suffix, wordBank, memo)
            totalCount += count
    
    memo[target] = totalCount
    return totalCount

# testing
print(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
# expected output: 2
print(countConstruct('aaaaaaaaaaaaaaaaaX', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa'])); 
# expected output: 0
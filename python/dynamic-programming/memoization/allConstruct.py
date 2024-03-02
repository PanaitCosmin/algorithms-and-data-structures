# Write  a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
# The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the
# 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.


def allConstruct(target: str, wordBank: list, memo = None) -> list:
    if memo is None:
        memo = {}

    if target in memo: return memo[target]
    if target == "": return [[]]

    res = []

    for word in wordBank:
        if target.startswith(word):
            suffix = target[len(word): ]
            suffixWays = allConstruct(suffix, wordBank, memo)
            targetWays = [[word] + way for way in suffixWays]
            res.extend(targetWays)
    
    memo[target] = res
    return res

# Testing
print(allConstruct('purple', ['pu', 'rp', 'ple', 'l', 'e', 'r']))
# expected output:
# [['pu', 'rp', 'l', 'e'], ['pu', 'r', 'ple']]

print(allConstruct('aaaaaaaaaaaaaay', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
# expected output:
# []
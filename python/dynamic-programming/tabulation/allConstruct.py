# Write  a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
# The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the
# 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.


def allConstruct(target: str, wordBank: list) -> list:
    table = [[] for _ in range(len(target) + 1)]
    table[0] = [[]]

    for i in range(len(target)):
        for word in wordBank:
            if target[i : i + len(word)] == word:
                newCombinations = [combination + [word] for combination in table[i]]
                table[i + len(word)].extend(newCombinations)
  
    return table[len(target)]

# Testing
print(allConstruct('purple', ['pu', 'rp', 'ple', 'l', 'e', 'r']))
# expected output:
# [['pu', 'rp', 'l', 'e'], ['pu', 'r', 'ple']]

print(allConstruct('aaaaaaaaaaaaaay', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
# expected output:
# []
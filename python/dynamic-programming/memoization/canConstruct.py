# Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.
# The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

def canConstruct(target: str, wordBank: list, memo = {}) -> bool:
    if (target in memo): return memo[target]
    if (target == ""): return True

    for word in wordBank:
        if target.startswith(word):
            suffix = target[len(word):]

            if canConstruct(suffix, wordBank, memo):
                memo[target] = True
                return True

    memo[target] = False
    return False

# testing
print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
# expected output: True
print(canConstruct("eeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "f"]))
# expected output: True
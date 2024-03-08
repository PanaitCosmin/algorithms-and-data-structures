# Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.
# The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

def canConstruct(target: str, wordBank: list) -> bool:
    table = [False] * (len(target) + 1)
    table[0] = True

    for i in range(len(target)):
        if table[i]:
            for word in wordBank:
                if target[i : i + len(word)] == word:
                    table[i + len(word)] = True
    
    return table[len(target)]

# testing
print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
# expected output: True
print(canConstruct("eeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "f"]))
# expected output: True
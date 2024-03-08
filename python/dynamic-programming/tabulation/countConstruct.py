# Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.
# The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

def countConstruct(target: str, wordBank: list) -> int:
    table = [0] * (len(target) + 1)
    table[0] = 1

    for i in range(len(target)):
        if table[i]:
            for word in wordBank:
                if target[i : i + len(word)] == word:
                    table[i + len(word)] += table[i]
    
    return table[len(target)]
    

# testing
print(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
# expected output: 2
print(countConstruct('aaaaaaaaaaaaaaaaaX', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa'])); 
# expected output: 0
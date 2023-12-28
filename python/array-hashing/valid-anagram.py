# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

def isAnagram(s: str, t:str) -> bool:
    if len(s) != len(t): return False

    characters = {}
    
    #count numbers of characters
    for char in s:
        characters[char] = 1 + characters.get(char, 0)
    
    #substract characters
    for char in t:
        if char not in characters: return False
        characters[char] = characters.get(char) - 1

    #find if there are still characters
    for val in characters.values():
        if val != 0: return False

    return True


print(isAnagram('ssscart', 'sstacrs'))
print(isAnagram('casa', 'cara'))
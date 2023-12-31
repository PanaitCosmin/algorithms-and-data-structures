# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

from collections import defaultdict 

def groupAnagrams(strs: list) -> list:
    # dict with list type as values
    res = defaultdict(list)
    # loop through words in list
    for word in strs:
        # create list for apperance of characters
        count = [0] * 26
        # loop through every char in word
        for char in word:
            # count the apperance of char at the corresponding index
            count[ord(char) - ord('a')] += 1
        # map the count of characters with his word
        res[tuple(count)].append(word)
    
    return list(res.values())

# testing
print(groupAnagrams([
    "eat","tea","tan","ate","nat","bat"
]))
# expected output:
# [["bat"],["nat","tan"],["ate","eat","tea"]]
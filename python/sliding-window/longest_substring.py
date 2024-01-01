# Longest Substring Without Repeating Characters

# Given a string s, find the length of the longest
# substring without repeating characters.

def lengthLongestSubstring(s: str) -> int:
    characters = set()
    left, length = 0, 0
    # iterate through every index char. in string
    for right in range(len(s)):
        # if we find a duplicate char. in substring
        while s[right] in characters:
            # remove char. from left untill the duplicate char. is deleted
            characters.remove(s[left])
            # move the first char. in substring to the next
            left += 1
        # add unique char. in substring
        characters.add(s[right])
        # compute the max length
        length = max(length, right - left + 1)

    return length

# testing
print(lengthLongestSubstring("abcabcbb"))
# expected output: 3
        
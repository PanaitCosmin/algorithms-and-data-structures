# Longest Repeating Character Replacement

# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

# Return the length of the longest substring containing the same letter you can get after performing the above operations.

def characterReplacement(s: str, k:int) -> int:
    # used to count every char. in sequence
    count = {}
    # pointer to the first char.
    left = 0
    # max number of the same char.in sequence
    maxCount = 0
    # loop through every char.
    for right in range(len(s)):
        # count and increase number of char
        count[s[right]] = 1 + count.get(s[right], 0)
        # update the max no. of the same char.
        maxCount = max(maxCount, count[s[right]])
        # check the number of different char. > k
        if (right - left + 1) - maxCount > k:
            # delete the left char.
            count[s[left]] -= 1
            # move the start of the sequence
            l += 1
    # return the length of the sequence
    return (right - left + 1)

# testing
print(characterReplacement("ABAB", 2))
# expected output: 4
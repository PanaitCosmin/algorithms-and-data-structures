# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

def longestSequence(nums: list) -> int:
    longest = 0
    numSet = set(nums)

    for num in numSet:
        # find the start of one sequence
        if num-1 not in numSet:
            length = 1
            # search for the next numbers in this sequence
            while num + 1 in numSet:
                num += 1
                length += 1
            
            longest = max(longest, length)
    
    return longest

# testing
print(longestSequence([100,4,200,1,3,2]))
# expected output: 4
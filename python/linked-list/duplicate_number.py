# Find the Duplicate Number
# Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

# There is only one repeated number in nums, return this repeated number.

# You must solve the problem without modifying the array nums and uses only constant extra space.

def findDuplicate(nums: list) -> int:
    # use Floyd's algo for cycle detection
    # initialize slow and fast pointers
    slow, fast = 0, 0
    # loop through list until we find the cycle
    while 1:
        # move slow and fast pointers
        slow = nums[slow]
        fast = nums[nums[fast]]
        # find the cycle
        if slow == fast: break
    # initialize the second slow pointer
    slow2 = 0
    # loop through list until slow and slow2 meets
    while 1:
        # move slow and slow2 pointers
        slow = nums[slow]
        slow2 = nums[slow2]
        # return the duplicate number
        if slow == slow2:
            return slow

# testing
print(findDuplicate([1, 3, 4, 2, 2]))
# expected output: 2
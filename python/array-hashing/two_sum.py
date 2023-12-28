# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

#output: [index, index]

def twoSum(nums: list, target: int) -> list:
    map = {}

    for i, n in enumerate(nums):
        # compute the number we search for
        diff = target - n

        # search for diff
        if diff in map:
            return [map[diff], i]

        # map number with his index
        map[n] = i


# testing
print(twoSum([3,2,4], 6)) # expected [1,2]
# Two Sum II - Input Array Is Sorted

# Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

# Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

# The tests are generated such that there is exactly one solution. You may not use the same element twice.

# Your solution must use only constant extra space.

def twoSum(nums: list, target: int) -> list:
    # create two pointers start and end index array
    left, right = 0, len(nums) - 1

    while (left < right):
        # compute the sum of the two potential numbers
        potentSum = nums[left] + nums[right]

        # move to a lower number if sum > target or to a higher number if sum < target
        if potentSum > target:
            right -= 1
        elif potentSum < target:
            left += 1
        else: return [left + 1, right + 1]

# testing
print(twoSum([2,7,11,15], 9)) # exprected output: [1,2]
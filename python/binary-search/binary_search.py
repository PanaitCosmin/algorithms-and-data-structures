# Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.

def binarySearch(nums: list, target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        pivot = (left + right) // 2

        if nums[pivot] < target:
            left = pivot + 1
        elif nums[pivot] > target:
            right = pivot - 1
        else: return pivot

    return -1

# testing
print(binarySearch([-1,0,3,5,9,12], 9))
# expected output: 4
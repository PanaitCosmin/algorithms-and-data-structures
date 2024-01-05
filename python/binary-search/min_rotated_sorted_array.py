# Find Minimum in Rotated Sorted Array

# Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

#     [4,5,6,7,0,1,2] if it was rotated 4 times.
#     [0,1,2,4,5,6,7] if it was rotated 7 times.

# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

# Given the sorted rotated array nums of unique elements, return the minimum element of this array.

# You must write an algorithm that runs in O(log n) time.

def findMin(nums: list) -> int:
    # pick a number in list to compare it later
    res = nums[0]
    # create 2 pointers for the list
    left, right = 0, len(nums) - 1
    # loop through list
    while (left < right):
        # if we are in a sorted list
        if nums[left] < nums[right]:
            res = min(res, nums[left])
            break
        # create a pivot for the list
        pivot = (left + right) // 2
        # save the potential minimum value
        res = min(res, nums[pivot])
        # check the side of the list we are in
        if nums[pivot] > nums[left]:
            # we are in the left side so we move left
            left = pivot + 1
        else:
            # we are in the right side so we move right
            right = pivot - 1
    
    return res

# testing
print(findMin([3,4,5,1,2]))
# expected output: 1
print(findMin([4,5,6,7,0,1,2]))
# expected output: 0
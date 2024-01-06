# There is an integer array nums sorted in ascending order (with distinct values).

# Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

# Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

# You must write an algorithm with O(log n) runtime complexity.

def search(nums: list, target: int) -> int:
    # initialize 2 pointers
    left, right = 0, len(nums) - 1
    # search through list
    while left <= right:
        # create middle pointer
        pivot = (left + right) // 2
        # check for the target
        if nums[pivot] == target:
            return pivot
        # check to see if we are in the left side sorted list
        if nums[left] <= nums[pivot]:
            # check for target in this portion
            if target > nums[pivot] or target < nums[left]:
                # move to the right side sorted list
                left = pivot + 1
            else:
                # reduce the list size
                right = pivot - 1
        # we are in the right side sorted list
        else:
            # check for the target in this portion
            if target < nums[pivot] or target > nums[right]:
                # move to the left side sorted list
                right = pivot - 1
            else:
                # reduce list size
                left = right + 1
    return -1

# testing
print(search([4,5,6,7,0,1,2], 0))
# expeced output: 4
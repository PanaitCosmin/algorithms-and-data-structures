# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

def threeSum(nums: list) -> list:
    nums.sort()
    res = []
    # loop through every number in nums
    for i,n in enumerate(nums):
        # jump over the same number
        if i > 0 and n == nums[i-1]: continue
        # create pointers for the next and last number
        left, right = i + 1, len(nums) - 1
        # loop through every number between idx left & right
        while left < right:
            # compute the sum of 3 potential valid numbers
            sum3 = n + nums[left] + nums[right]
            # move index accordingly with sum condition
            if sum3 > 0:
                right -= 1
            elif sum3 < 0:
                left += 1
            else:
                # push valid combination
                res.append([n, nums[left], nums[right]])
                # move to the next left number
                left += 1
                # jump over the same left number
                while nums[left] == nums[left - 1] and left < right:
                    left += 1
    
    return res

# testing
print(threeSum([-1, 0, 1, 2, -1, -4])) # exprected output: [[-1, -1, 2], [-1, 0, 1]]
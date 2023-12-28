# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

def duplicate(arr: list) -> bool:
    nums = set() #hashset
    
    for n in arr:
        if n in nums:
            return True
        nums.add(n)
    return False

#testing
print(duplicate([1,2,3,2]))
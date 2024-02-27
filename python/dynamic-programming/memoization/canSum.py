# Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as argumenst.
# The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
# You may use an element of the array as many times as needed.
# You may assume that all input numbers are nonnegative.

def canSum(targetSum: int, numbers: list, memo = None) -> bool:
    if memo is None:
        memo = {}
    
    if targetSum in memo: return memo[targetSum]
    if targetSum == 0: return True
    if targetSum < 0: return False

    for number in numbers:
        remainder = targetSum - number
        if canSum(remainder, numbers, memo):
            memo[targetSum] = True
            return True
    
    memo[targetSum] = False
    return False

# testing
print(canSum(7, [5, 3, 4, 7])) # expected output: True
print(canSum(300, [7, 14])) # expected output: False
# Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
# The function should return an array containing any combination of elements that add up to exactly the targetSum.
# If there is no combination that adds up to the targetSum, then return null.

def how_sum(target_sum, numbers, memo=None):
    if memo is None:
        memo = {}

    if target_sum in memo:
        return memo[target_sum]
    if target_sum == 0:
        return []
    if target_sum < 0:
        return None

    for num in numbers:
        remainder = target_sum - num
        remainder_result = how_sum(remainder, numbers, memo)
        if remainder_result is not None:
            memo[target_sum] = remainder_result + [num]
            return memo[target_sum]

    memo[target_sum] = None
    return None

# testing
print(how_sum(8, [2, 3, 5]))  # expected output: [2, 2, 2, 2]
print(how_sum(300, [7, 14]))  # expected output: None

# Write a function 'bestSum(targetSum, numbers)', that takes in a targetSum and an array of numbers as arguments.
# The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
# If there is a tie for the shortest combination, you may return any one of the shortest.

def bestSum(targetSum: int, numbers: list, memo = None):
    if memo is None:
        memo = {}
    
    if targetSum in memo: return memo[targetSum]
    if targetSum == 0: return []
    if targetSum < 0: return None

    shortest = None

    for number in numbers:
        remainder = targetSum - number
        remainderCombination = bestSum(remainder, numbers, memo)
        if remainderCombination is not None:
            combination = remainderCombination + [number]
            if not shortest or len(combination) < len(shortest):
                shortest = combination
    
    memo[targetSum] = shortest
    return shortest

# testing
print(bestSum(8, [2, 4, 5])) # expected output: [4, 4]
print(bestSum(100, [1, 2, 5, 25])) # expected output: [25, 25, 25, 25]
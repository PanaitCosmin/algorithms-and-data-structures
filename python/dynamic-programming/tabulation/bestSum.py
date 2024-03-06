# Write a function 'bestSum(targetSum, numbers)', that takes in a targetSum and an array of numbers as arguments.
# The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
# If there is a tie for the shortest combination, you may return any one of the shortest.

def bestSum(target_sum, numbers):
    table = [None] * (target_sum + 1)
    # seed the trivial answer into the table
    table[0] = []
    
    for i in range(target_sum + 1):
        if table[i] is not None:
            for num in numbers:
                if i + num <= target_sum:
                    combination = table[i] + [num]
                    # if current combination shorter than current value
                    if table[i + num] is None or len(table[i + num]) > len(combination):
                        table[i + num] = combination

    return table[target_sum]

# testing
print(bestSum(8, [2, 4, 5])) # expected output: [4, 4]
print(bestSum(100, [1, 2, 5, 25])) # expected output: [25, 25, 25, 25]
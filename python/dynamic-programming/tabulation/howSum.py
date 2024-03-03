# Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
# The function should return an array containing any combination of elements that add up to exactly the targetSum.
# If there is no combination that adds up to the targetSum, then return null.

def how_sum(target_sum, numbers):
    table = [None] * (target_sum + 1)
    # seed the trivial answer into the table
    table[0] = []
    # loop throught table
    for i in range(target_sum):
        if table[i] is not None:
            # loop throught numbers
            for num in numbers:
                if i + num <= target_sum:
                    table[i + num] = table[i] + [num]
    
    return table[target_sum]

# testing
print(how_sum(8, [2, 3, 5]))  # expected output: [2, 2, 2, 2]
print(how_sum(300, [7, 14]))  # expected output: None

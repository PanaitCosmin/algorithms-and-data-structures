# Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as argumenst.
# The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
# You may use an element of the array as many times as needed.
# You may assume that all input numbers are nonnegative.

def canSum(targetSum: int, numbers: list) -> bool:
    table = [ False ] * (targetSum + 1)
    # seed the trivial answer into the table
    table[0] = True
    # loop throght table
    for i in range(targetSum):
        # find a number which can lead to the target sum
        if table[i]:
            # update the element at coordinates current + num
            for num in numbers:
                if (i + num) <= targetSum:
                    table[i + num] = True

    return table[targetSum]

# testing
print(canSum(7, [5, 3, 4, 7])) # expected output: True
print(canSum(300, [7, 14])) # expected output: False
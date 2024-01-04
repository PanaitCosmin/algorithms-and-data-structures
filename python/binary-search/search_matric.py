# Search a 2D Matrix

# You are given an m x n integer matrix matrix with the following two properties:

#     Each row is sorted in non-decreasing order.
#     The first integer of each row is greater than the last integer of the previous row.

# Given an integer target, return true if target is in matrix or false otherwise.

# You must write a solution in O(log(m * n)) time complexity.

def searchMatrix(matrix: list, target: int) -> bool:
    # numbers of rows and cols in matrix
    rows, cols = len(matrix), len(matrix[0])
    # pointers for top and bottom row
    topRow, botRow = 0, rows -1

    while topRow <= botRow:
        row = (topRow + botRow) // 2
        if target > matrix[row][-1]:
            topRow = row + 1
        elif target < matrix[row][0]:
            botRow = row - 1
        else: break

    if not(topRow <= botRow): return False

    row = (topRow + botRow) // 2
    left, right = 0, cols - 1

    while left <= right:
        pivot = (left + right) // 2
        if target > matrix[row][pivot]:
            left = pivot + 1
        elif target < matrix[row][pivot]:
            right = pivot - 1
        else: return True

    return False

# testing
print(searchMatrix(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]],3
))
# expected output: True
print(searchMatrix(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13
))
# expected output: False
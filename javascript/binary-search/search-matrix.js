// Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

//     Each row is sorted in non-decreasing order.
//     The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

function searchMatrix(matrix, target) {
    // numbers of rows and cols in matrix
    const [rows, cols] = [matrix.length, matrix[0].length]
    // indexes top and bottom row
    let [topRow, botRow] = [0, rows - 1]
    // save the correct row globaly
    let row = undefined
    // find the correct row
    while (topRow <= botRow) {
        row = Math.floor((topRow + botRow) / 2)

        if (target > matrix[row][cols - 1]) {
            topRow = row + 1
        } else if (target < matrix[row][0]){
            botRow = row - 1
        } else break
    }

    if (!(topRow <= botRow)) return false
    // create left and right pointers
    let [left, right] = [0, cols - 1]
    // basic BS algo
    while (left <= right) {
        const pivot = Math.floor((left + right) / 2)
        if (target > matrix[row][pivot]) {
            left = pivot + 1
        } else if (target < matrix[row][pivot]) {
            right = pivot - 1
        } else {
            return true
        }
    }

    return false
}

// testing
console.log(searchMatrix(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3
))
// expected output: true
console.log(searchMatrix(
    [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13
))
// expected output: false
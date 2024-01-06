// Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

function search(nums, target) {
    // create two pointers, start-end array
    let [left, right] = [0, nums.length - 1]
    // loop through array
    while (left <= right) {
        // create pivot
        const pivot = Math.floor((left + right) / 2)
        // check for target
        if (nums[pivot] === target) {
            return pivot
        }
        // left sorted portion array
        if (nums[left] <= nums[pivot]) {
            // target is not in left sorted array
            if (target > nums[pivot] || target < nums[left]) {
                // move to the right side
                left = pivot + 1
            } else {
                // reduce the array size
                right = pivot - 1
            }
        // right sorted array
        } else {
            // target is not ub rigth sorted array
            if (target < nums[pivot] || target > nums[right]) {
                // move to the left side
                right = pivot - 1
            } else {
                // reduce the array size
                left = pivot + 1
            }
        }
    }


    return -1
}

// testing
console.log(search([4,5,6,7,0,1,2], 0))
// expected output: 4
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function binarySearch(nums, target) {
    // start - end pointers
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
        // create an index at the middle of left and right
        const pivot = Math.floor((left + right) / 2)

        if (nums[pivot] < target) {
             // move left pointer
            left = pivot + 1
        } else if (nums[pivot] > target){
            // move right pointer
            right = pivot - 1
        } else {
            return pivot
        }
    }

    return -1
}

// testing 
console.log(binarySearch([-1,0,3,5,9,12], 9))
// expected output: 4
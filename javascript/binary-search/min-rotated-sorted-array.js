// Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

function findMin(nums) {
    // pick a number in array
    let res = nums[0]
    // create two pointers
    let [left, right] = [0, nums.length - 1]
    // search through array
    while(left <= right) {
        // if left is the start and right the end of a sorted arr.
        if (nums[left] < nums[right]) {
            // get the lowest val. in arr. and compare
            res = Math.min(res, nums[left])
            break
        } 
        // create idx for the middle val.
        const pivot = Math.floor((left + right) / 2)
        // save the potential minimum value
        res = Math.min(res, nums[pivot])
        // check the side we are in the array
        if (nums[pivot] >= nums[left]) {
            // we are in the left side so we move to the right
            left = pivot + 1
        } else {
            // wr are in the right side so we move to the left
            right = pivot - 1
        }
    }

    return res
}

// testing
console.log(findMin([3,4,5,1,2]))
// expected output: 1
console.log(findMin([4,5,6,7,0,1,2]))
// expected output: 0
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums) {
    nums = nums.sort((a, b) => a - b)
    const res = []

    // loop through every number in nums
    for (let i = 0; i < nums.length; i++) {
        // jump over the same number
        if (i > 0 && nums[i] === nums[i-1]) {continue}
        // create two pointers, one at start + 1 & two at end
        let [left, right] = [i + 1, nums.length - 1]
        // loop through every number between idx left & right
        while (left < right) {
            // compute the sum of the 3 potential numbers
            const sum = nums[i] + nums[left] + nums[right]
            // move index accordingly with sum condition
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                // push valid combination
                res.push([nums[i], nums[left], nums[right]])
                // move to the next number
                left++
                // jump over the next number if its the same
                while (nums[left] === nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return res
}

// testing
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // expected output: [[-1, -1, 2], [-1, 0, 1]]

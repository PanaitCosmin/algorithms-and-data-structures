// Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

function findDuplicate(nums) {
    // use Floyd's algo for cycle detection
    // initialize slow and fast pointers
    let slow = 0
    let fast = 0
    // loop through array until we find a cycle
    while (1) {
        // move slow and fast pointers
        slow = nums[slow]
        fast = nums[nums[fast]]
        // find the cycle
        if (slow === fast) break
    }
    // initialize a second slow pointer
    let slow2 = 0
    // loop through array until this pointer meet
    while (1) {
        slow = nums[slow]
        slow2 = nums[slow2]
        // find the start of the cycle
        if (slow === slow2) return slow
    }
}

// testing
console.log(findDuplicate([1, 3, 4, 2, 2]))
// expected output: 2
// Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums) {
    const res = new Array(nums.length).fill(1)

    let [prefix, postfix] = [1, 1]
    // save the product from left the side of the number
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix
        prefix *= nums[i]
    }
    // save the product from the right side of the number
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix
        postfix *= nums[i]
    }

    return res
}

// testing
console.log(productExceptSelf([1, 2, 3, 4]))
// expected output: [24, 12, 8, 6]
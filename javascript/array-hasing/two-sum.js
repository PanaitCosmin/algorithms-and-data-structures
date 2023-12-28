// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice

//output: [index, index]

function twoSum(nums, target) {
    const map = new Map()

    // map every number until we find the diff
    // initial mapping 
    map.set(nums[0], 0)

    //go through nums array
    for (let i = 1; i < nums.length; i++) {
        //compute the number we search for
        const diff = target - nums[i]

        //search for diff
        if (map.has(diff)) {
            return [map.get(diff), i]
        }

        // map number with his index
        map.set(nums[i], i)
    }
}

// testing
console.log(twoSum([2,7,11,15], 9)) // expected [0,1]
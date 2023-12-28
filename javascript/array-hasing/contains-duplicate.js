//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function duplicate(arr) {
    const nums = new Set()

    for(let num of arr) {
        if (nums.has(num)) {
            return true
        } else {
            nums.add(num)
        }
    }

    return false
}


//testing

console.log(duplicate([2,3,4,5,2]))
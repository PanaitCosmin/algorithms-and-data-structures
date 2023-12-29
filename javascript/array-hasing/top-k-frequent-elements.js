// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

function topKFrequent(nums, k) {
    const countNumbers = new Map()
    const output = []
    const arr = new Array(nums.length+1).fill(0)

    // count appearance of numbers
    nums.map(num=>{
        const count = countNumbers.get(num) || 0
        countNumbers.set(num, count)
    })

    // create an array with the numbers of appearance as index
    for(const [key, value] of countNumbers) {
        const prev = arr[value] || []
        prev.push(key)
        arr[value] = prev
    }

    // loop in reverse order in arr to find the most frequent numbers 
    for (let i = nums.length-1; i >= 0; i--) {
        if (k < 1) break
        if (arr[i]) {
            for(let num of arr[i]) {
                if (k < 1) break
                output.push(num)
                k--
            }
        }
    }

    return output
}

// testing
console.log(topKFrequent([1,1,1,2,2,3],2)) // expected output 
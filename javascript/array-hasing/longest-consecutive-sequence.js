// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

function longestConsecutive(nums) {
    let longest = 0
    const numSet = new Set(nums)

    for(const num of numSet) {
        // find the lowest or the start number in one of the sequences
        if (numSet.has(num - 1)) continue
        // save the start of one sequence and his length
        let [currentNum, len] = [num, 1]
        // search for elements that follow in the corresponding sequence
        while(numSet.has(currentNum+1)) {
            // move to the next potential number
            currentNum++
            // add length
            len++
        }
    
        longest = Math.max(longest, len)
    }

    return longest
}

// testing 
console.log(longestConsecutive([100,4,200,1,3,2]))
// expected output: 4
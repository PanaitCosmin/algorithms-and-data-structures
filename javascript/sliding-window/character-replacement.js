// Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

function characterReplacement(s, k) {
    // used to count every char. in sequence
    const count = new Map()
    // pointer to the first char.
    let left = 0
    // max number of the same char.in sequence
    let maxCount = 0
    // final result
    let res = 0
    // loop through every char.
    for (let right = 0; right < s.length; right++) {
        // count and increase number of char
        const value = (count.get(s[right]) || 0) + 1
        count.set(s[right], value)
        // update the max no. of the same char.
        maxCount = Math.max(maxCount, value)
        // find if the number of different char. > k
        while ((right - left + 1) - maxCount > k) {
            // delete the char. from left
            const newValue = count.get(s[left]) - 1
            count.set(s[left], newValue)
            l += 1
        }
        
        res = Math.max(res, right - left + 1)
    }

    return res
}

// testing
console.log(characterReplacement("ABAB", 2))
// expected output: 4
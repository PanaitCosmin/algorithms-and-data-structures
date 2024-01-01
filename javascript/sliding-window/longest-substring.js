// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring without repeating characters.

function lengthLongestSubstring(s) {
    const characters = new Set()
    let [left, count] = [0, 0]
    // iterate through every index char. in string
    for (let right = 0; right < s.length; right++) {
        // find a duplicate char.
        while (characters.has(s[right])) {
            // delete all char. from left untill we delete the duplicate char.
            characters.delete(s[left])
            // move the position of the first char. in substring
            left++
        }
        // add in substring a new char.
        characters.add(s[right])
        // compute max length
        count = Math.max(count, right - left + 1)
    }

    return count
}

// testing
console.log(lengthLongestSubstring("abcabcbb"))
// expected output: 3
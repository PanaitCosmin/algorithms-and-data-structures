// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    // initialize two poniters
    let [left, right] = [0, s.length - 1]
    // loop through array
    while (left <= right) {
        // save the left value
        const temp = s[left]
        // move the right value at left
        s[left] = s[right]
        // move the left value at right
        s[right] = temp
        // move pointers
        left++
        right--
    }

    return s
}

// testing
console.log(reverseString(["h","e","l","l","o"]))
// expected output:
// ["o","l","l","e","h"]
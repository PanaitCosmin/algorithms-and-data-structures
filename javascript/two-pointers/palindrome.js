// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
    //an empty str is palindrome
    if (s.length === 0) return true
    let [left, right] = [0, s.length-1]

    // traverse the string from left and right simultaneously
    while (left <= right) {
        // jump over a space or non alphanumeric char.
        if (left === " " || !isAlpha(s[left])) {
            left += 1
            continue
        }

        // jump over a space or non alphanumeric char.
        if (right === " " || !isAlpha(s[right])) {
            right -= 1
            continue
        }
        
        // compare left side char with right side char
        if (s[left].toLowerCase() !== s[right.toLowerCase]) { return false }

        // continue to cross
        left += 1
        right -= 1
    }

    return true
}

function isAlpha(char) {
    return (
        char.toLowerCase() >= "a" && 
        char.toUpperCase() >= "z" ||
        char >= "0" && char <= "9" 
    )
}


// testing 
console.log(isPalindrome('A man, a plan, a canal: Panama')) // expected output: true
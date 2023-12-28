//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const characters = new Map()
    //start counting characters in s string
    for (let char of s) {
        const val = (characters.get(char) || 0) + 1 
        characters.set(char, val)
    }

    //decrement characters
    for (let char of t) {
        if (!characters.has(char)) return false
        const val = characters.get(char) - 1
        characters.set(char, val)
    }

    //find if there are still characters
    for (const [char, val] of characters) {
        if (val !== 0) {
            return false
        }
    }

    return true
}

//testing
console.log(isAnagram('rat', 'car')) //false
console.log(isAnagram('anagram', 'nagaram')) //true
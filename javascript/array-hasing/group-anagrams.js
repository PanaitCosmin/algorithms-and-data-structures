// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.


function groupAnagrams(strs) {
    if (!strs.length) return []
    const codeMap = new Map()
    // loop through every word in array
    for (let word of strs) {
        // encode the word
        const codeWord = countChar(word)
        // save the word in the corresponding array or create new array 
        const values = codeMap.get(codeWord) || []
        // save the word in array
        values.push(word)
        // save the array with words at encode key
        codeMap.set(codeWord, values)
    }

    return [...codeMap.values()]
}
// count the number of char in the word
function countChar(word) {
    // create array with 26 elements for 26 characters 
    const frequency = new Array(26).fill(0)
    for (let char of word) {
        // create index for corresponding char in array
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)
        // add one appearance of corresponding char
        frequency[charCode]++
    }
    // return the str format fpr the number of char appearance 
    return frequency.toString()
    // exp: "1,0,2,..." -> "acc"
}

// testing
console.log(groupAnagrams([
    "eat", "tea", "tan", "ate", "nat", "bat"
]))
// expected output: 
// [["bat"],["nat","tan"],["ate","eat","tea"]]
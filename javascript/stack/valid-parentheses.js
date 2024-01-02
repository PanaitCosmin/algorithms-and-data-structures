// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

function validParentheses(s) {
    const parentheses = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    const stack = []
    // iterate through every parenthese
    for (let char of s) {
        // check if its closed
        const isClosedParenthese = char in parentheses
        // add in stack if its open 
        if(!isClosedParenthese) {
            stack.push(char)
            continue
        }
        // if its closed check the parenheses pair
        if (stack[stack.length - 1] === parentheses[char]) {
            stack.pop()
            continue
        }
        // if its closed but dont make a pair
        return false
    }
    // a valid solution will be an empty stack
    return (stack.length === 0)
}

// testing
console.log(validParentheses("()[]{}"))
// expected output: true
console.log(validParentheses("(([])})"))
// expected output: false
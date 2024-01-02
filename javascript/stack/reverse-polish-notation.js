// Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

//     The valid operators are '+', '-', '*', and '/'.
//     Each operand may be an integer or another expression.
//     The division between two integers always truncates toward zero.
//     There will not be any division by zero.
//     The input represents a valid arithmetic expression in a reverse polish notation.
//     The answer and all the intermediate calculations can be represented in a 32-bit integer

function evaluateRPN(tokens) {
    // create the two operands 
    let [a, b] = [0, 0]
    const stack = []
    // loop through every operands and operators
    for (let char of tokens) {
        // check for operators
        switch(char) {
            case "+":
                // get the operands
                a = stack.pop() // the second operand
                b = stack.pop() // the first operand
                // do and save the operation
                stack.push(a + b)
                break
            
            case "-":
                // get the operands
                a = stack.pop() // the second operand
                b = stack.pop() // the first operand
                // do and save the operation
                stack.push(b - a)
                break

            case "*":
                // get the operands
                a = stack.pop() // the second operand
                b = stack.pop() // the first operand
                // do and save the operation
                stack.push(a * b)
                break

            case "/":
                // get the operands
                a = stack.pop() // the second operand
                b = stack.pop() // the first operand
                // do and save the operation
                let val = b / a
                // rounds down
                if (val > 0) {
                    val = Math.floor(val)
                }
                // rounds up
                if (val < 0) {
                    val = Math.ceil(val)
                }
                // add result to the stack
                stack.push(val)
                break
            default:
                // convert and add operands
                stack.push(+char)
        }
    }
    return stack[0]
}

// testing
console.log(evaluateRPN(["2","1","+","3","*"]))
// expected output: 9
console.log(evaluateRPN(
    ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    ))
// expected output: 22
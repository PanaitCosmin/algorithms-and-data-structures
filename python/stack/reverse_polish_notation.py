# Evaluate Reverse Polish Notation

# You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

# Evaluate the expression. Return an integer that represents the value of the expression.

# Note that:

#     The valid operators are '+', '-', '*', and '/'.
#     Each operand may be an integer or another expression.
#     The division between two integers always truncates toward zero.
#     There will not be any division by zero.
#     The input represents a valid arithmetic expression in a reverse polish notation.
#     The answer and all the intermediate calculations can be represented in a 32-bit integer.

def evaluateRPN(tokens: list) -> int:
    stack = []
    # loop through every operands and operators
    for char in tokens:
        if char == "+":
            # get the 2nd and 1st operand
            a, b = stack.pop(), stack.pop()
            # do and save the operation
            stack.append(a + b)
        elif char == "-":
            # get the 2nd and 1st operand
            a, b = stack.pop(), stack.pop()
            # do and save the operation
            stack.append(b - a)
        elif char == "*":
            # get the 2nd and 1st operand
            a, b = stack.pop(), stack.pop()
            # do and save the operation
            stack.append(a * b)
        elif char == "/":
            # get the 2nd and 1st operand
            a, b = stack.pop(), stack.pop()
            # do and save the operation
            stack.append(int(b / a))
        else:
            # convert and save operand
            stack.append(int(char))
    
    return stack[0]

# testing 
print(evaluateRPN(["2","1","+","3","*"]))
# expected output: 9
print(evaluateRPN(
    ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
))
# expected output: 22
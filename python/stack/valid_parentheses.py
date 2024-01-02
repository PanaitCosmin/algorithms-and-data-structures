# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

#     Open brackets must be closed by the same type of brackets.
#     Open brackets must be closed in the correct order.
#     Every close bracket has a corresponding open bracket of the same type.


def validParentheses(s: str) -> bool:
    parentheses = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    # save here the open parantheses
    stack = []
    # loop through every parentheses
    for char in s:
        # if its a open parenthese
        if char not in parentheses:
            # add to the stack
            stack.append(char)
            continue
        # if its closed but its the first in str or is not in pair
        if not stack or stack[-1] != parentheses[char]:
            return False
        # pop the open parantheses which coincides
        stack.pop()
    
    return not stack

# testing 
print(validParentheses("()[]{}"))
# expected output: True
print(validParentheses("(([}))"))
# expected output: False
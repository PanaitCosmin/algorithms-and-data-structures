# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

def reverseString(s: list) -> list:
    # initialize two pointers
    left, right = 0, len(s) - 1
    # loop through list
    while left <= right:
        # save the left value
        temp = s[left]
        # move the right value at left
        s[left] = s[right]
        # move the left value at right
        s[right] = temp
        # move pointers
        left += 1
        right -= 1
    
    return s

# testing
print(reverseString(["h","e","l","l","o"]))
# expected output:
# ["o","l","l","e","h"]

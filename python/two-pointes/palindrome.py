# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

def isPalindrome(s: str) -> bool:
    # an empty string is palindrome
    if len(s) == 0: return True

    left, right = 0, len(s) - 1

    # traverse the string from left and right simultaneously
    while(left <= right):
        # jump over space and non alphanumeric char.
        if not s[left].isalpha() and not s[left].isdigit():
            left += 1
            continue

        # jump over space and non alphanumeric char.
        if not s[right].isalpha() and not s[right].isdigit():
            right -= 1
            continue

        if (s[left].lower() != s[right].lower()): return False

        left += 1
        right -= 1
    
    return True

# testing
print(isPalindrome('A man, a plan, a canal: Panama')) # expected output: True
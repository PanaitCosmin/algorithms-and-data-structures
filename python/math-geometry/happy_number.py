# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

#     Starting with any positive integer, replace the number by the sum of the squares of its digits.
#     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
#     Those numbers for which this process ends in 1 are happy.

# Return true if n is a happy number, and false if not.

def isHappy(n: int) -> bool:
    # save the seen numbers in a set
    seen = set()
    # compute sum if number is not happy yet or has not been seen
    while n != 1 and n not in seen:
        # add visited number
        seen.add(n)
        # update the number with sum square digits
        n = sumSquareDigits(n)

    return True if n == 1 else False

def sumSquareDigits(num: int) -> int:
    # initialize sum
    sum_digits = 0
    # loop through digits
    while num:
        # add the square of the last digit
        sum_digits += (num % 10) ** 2
        # delete the last digit
        num = num // 10
    
    return sum_digits

# testing
print(isHappy(19))
# expected output: True
# Write a function 'fib(n)' that takes in a number as an argument.
# The function should return the n-th number of a Finonacci sequence.

def fib(n: int) -> int:
    if n == 0: return 0
    table = [0] * (n + 1)

    table[1] = 1

    for i in range(n + 1):
        if i + 1 <= n:
            table[i + 1] += table[i]
        if i + 2 <= n:
            table[i + 2] += table[i]

    return table[n]

# testing
print(fib(6)) # output expected: 8
print(fib(7)) # output expected: 13
print(fib(50)) # output expected: 12586269025
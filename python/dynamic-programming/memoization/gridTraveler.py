# Say that you are a traveler on a 2D grid.
# You begin in the top-left corner and your goal is to travel to the bottom-rught corner.
# You may only move down or right.
# In how many ways can you travel to the goal on a grid with dimensions n * m ?

def gridTraveler(n: int, m: int, memo = None) -> int:
        if memo is None:
                memo = {}
        
        if (n, m) in memo:  return memo[(n, m)]
        if m == 0 or n == 0:    return 0
        if m == n == 1:    return 1

        memo[(n, m)] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo)

        return memo[(n, m)]

# testing
print(gridTraveler(3,2)) # expected output: 3
print(gridTraveler(3,3)) # expected output: 6

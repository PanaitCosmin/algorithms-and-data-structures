# Say that you are a traveler on a 2D grid.
# You begin in the top-left corner and your goal is to travel to the bottom-rught corner.
# You may only move down or right.
# In how many ways can you travel to the goal on a grid with dimensions n * m ?

def gridTraveler(m: int, n: int) -> int:
    # create 2D matrix filled with 0
    table = [[0] * (n + 1) for _ in range(m + 1)] 
    # initialize the base case
    table[1][1] = 1
    # loop through table
    for i in range(m + 1):
        for j in range(n + 1):
            # save current numbers of ways to travel i x j table
            current = table[i][j]
            # update right and down neighbors
            if j + 1 <= n:
                table[i][j + 1] += current
            if i + 1 <= m:
                table[i + 1][j] += current
    
    return table[m][n]

# testing
print(gridTraveler(3,2)) # expected output: 3
print(gridTraveler(3,3)) # expected output: 6

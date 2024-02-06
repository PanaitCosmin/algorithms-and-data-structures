# You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

# The area of an island is the number of cells with a value 1 in the island.

# Return the maximum area of an island in grid. If there is no island, return 0.


from collections import deque

def maxAreaIsland(grid: list) -> int:
    if not grid:
        return 0
    # get num of rows and cols
    rows, cols = len(grid), len(grid[0])
    # visited coordinates
    visited=set()
    # initial area 
    maxArea = 0
    # search fro neigbors land
    def bfs(r,c):
        q = deque()
        # current island area
        currentArea = 1
        # add visited land
        visited.add((r,c))
        q.append((r,c))
           
        while q:
            # get the land's coordinates
            row,col = q.popleft()
            # directions for the land's neighbors
            directions= [[1,0],[-1,0],[0,1],[0,-1]]
            
            for dr,dc in directions:
                # compute the neighbor's coordinates
                r,c = row + dr, col + dc
                # check for index overflow and unvisited land
                if (r) in range(rows) and (c) in range(cols) and grid[r][c] == 1 and (r ,c) not in visited:
                    # push and visit the new land
                    q.append((r , c ))
                    visited.add((r, c ))
                    # increment the island area
                    currentArea += 1
        return currentArea

    # loop through grid
    for r in range(rows):
        for c in range(cols):
            # find an unvisited land
            if grid[r][c] == 1 and (r,c) not in visited:
                # search down, up, right, left neighbor of this land to find the island area
                maxArea = max(maxArea, bfs(r,c))

    return maxArea

# testing
print(maxAreaIsland(
    [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
))
# expected output: 6